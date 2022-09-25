import {
  Request,
  Response,
  Router,
  NextFunction,
} from "express";
import {
  isEmpty,
} from "class-validator";

import { AppDataSource } from "../data-source";
import Sub from "../entities/Sub";
import User from "../entities/User";

import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";
import Post from "../entities/Post";

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
    console.log("query: ", error.query);
    return res.status(500).json({ error: "topSubs 조회중, 문제가 발생하였습니다.", detail: error });
  }
};

const subsRouter = Router();
subsRouter.get("/:name", userMiddleware, getSub);
subsRouter.post("/", userMiddleware, authMiddleware, createSub);
subsRouter.get("/sub/topSubs", topSubs);

export default subsRouter;