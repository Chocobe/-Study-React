import {
  Request,
  Response,
  Router,
  NextFunction,
} from "express";
import {
  isEmpty,
} from "class-validator";
import multer from "multer";
import path from "path";
import fs from "fs";

import { AppDataSource } from "../data-source";

import Sub from "../entities/Sub";
import User from "../entities/User";

import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import Post from "../entities/Post";

import { makeId } from "../utils/helpers";

const getSub = async (req: Request, res: Response) => {
  const name = req.params.name;
  
  try {
    const sub = await Sub.findOneByOrFail({ name });
    res.json(sub);
  } catch (error) {
    res.status(400).json({ error: "커뮤니티를 찾을 수 없습니다." });
  }
};

const createSub = async (req: Request, res: Response, next: NextFunction) => {
  const { name, title, description } = req.body;

  try {
    let errors: any = {};

    // 1. Client 에서 받은 Payload 검사
    if (isEmpty(name)) {
      errors.name = "이름은 비워둘 수 없습니다.";
    }

    if (isEmpty(title)) {
      errors.name = "제목은 비워둘 수 없습니다.";
    }

    // 2. name 이 이미 존재하는지 검사
    const sub = await AppDataSource
      .getRepository(Sub)
      .createQueryBuilder("sub")
      .where("lower(sub.name) = :name", { name: name.toLowerCase() })
      .getOne();

    console.log("sub: ", sub);

    if (sub) {
      errors.name = "서브가 이미 존재합니다.";
    }

    // 3. 에러가 존재한다면, throw
    if (Object.keys(errors).length) {
      throw errors;
    }
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ error: "Sub 생성을 위한 유효성 검사중, 문제가 발생했습니다." });
    return res.status(500).json(error);
  }

  try {
    const user: User = res.locals.user;

    const sub = new Sub();
    sub.name = name;
    sub.title = title;
    sub.description = description;
    sub.user = user;

    await sub.save();

    return res.json(sub);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Sub 생성중, 문제가 발생하였습니다." });
  }
};

const topSubs = async (req: Request, res: Response) => {
  try {
    const imageUrlExp = `COALESCE(s."imageUrn", 'https://www.gravatar.com/avatar?d=mp&f=y')`;
    const subs = await AppDataSource
      .createQueryBuilder()
      .select(`s.title, s.name, ${imageUrlExp} as "imageUrl", count(p.id) as "postCount"`)
      .from(Sub, "s")
      .leftJoin(Post, "p", `s.name = p."subName"`)
      .groupBy(`s.title, s.name, "imageUrl"`)
      .orderBy(`"postCount"`, "DESC")
      .limit(5)
      .execute();

    return res.json(subs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "topSubs 조회중, 문제가 발생하였습니다.", detail: error });
  }
};

const ownSub = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;

  try {
    const sub = await Sub.findOneOrFail({
      where: {
        name: req.params.name,
      },
    });

    if (sub.username !== user.username) {
      return res.status(403).json({ error: "이 커뮤니티를 소유하고 있지 않습니다." });
    }

    res.locals.sub = sub;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "ownSub 처리 중, 에러가 발생하였습니다." });
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/images",
    filename: (_req, file, callback) => {
      const name = makeId(10);
      callback(null, name + path.extname(file.originalname));
    },
  }),
  fileFilter: (_req, file, callback) => {
    const mimetype = file.mimetype;

    if (mimetype === "image/jpeg" || mimetype === "image/png") {
      callback(null, true);
    } else {
      callback(new Error("이미지가 아닙니다."));
    }
  },
});

const uploadSubImage = async (req: Request, res: Response) => {
  const sub: Sub = res.locals.sub;

  try {
    const type = req.body.type;
    
    // 파일 유형을 지정하지 않았을 때, 업로드 된 파일 삭제
    if (type !== "image" && type !== "banner") {
      if (!req.file?.path) {
        return res.status(400).json({ error: "유효하지 않은 파일 입니다." });
      }

      // 저장된 파일 지우기
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: "유효하지 않은 파일 유형 입니다." });
    }

    let oldImageUrn = "";

    if (type === "image") {
      oldImageUrn = sub.imageUrn || "";

      // 새로운 파일 이름을 sub.imageUrn 으로 바꿔주기
      sub.imageUrn = req.file?.filename || "";
    } else if (type === "banner") {
      oldImageUrn = sub.bannerUrn || "";
      
      // 새로운 파일 이름을 sub.bannerUrn 으로 바꿔주기
      sub.bannerUrn = req.file?.filename || "";
    }

    // 변경사항을 Database 에 저장
    await sub.save();

    // 이전 이미지 파일 삭제
    if (oldImageUrn) {
      const oldFilePath = path.resolve(
        process.cwd(),
        "public",
        "images",
        oldImageUrn
      );

      fs.unlinkSync(oldFilePath);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "파일 업로드 중, 문제가 발생하였습니다." });
  }
};

const subsRouter = Router();
subsRouter.get("/:name", userMiddleware, getSub);
subsRouter.post("/", userMiddleware, authMiddleware, createSub);
subsRouter.get("/sub/topSubs", topSubs);
subsRouter.post(
  "/:name/upload",
  userMiddleware,
  authMiddleware,
  ownSub,
  upload.single("file"),
  uploadSubImage
);

export default subsRouter;