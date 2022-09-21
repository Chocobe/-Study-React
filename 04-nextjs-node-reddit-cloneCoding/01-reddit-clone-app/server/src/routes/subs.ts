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
    return res.status(500).json({ error: "Sub 생성을 위한 유효성 검사중, 문제가 발생했습니다." });
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

const subsRouter = Router();
// subsRouter.post("/", createSub);
subsRouter.post("/", userMiddleware, authMiddleware, createSub);

export default subsRouter;