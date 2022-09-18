import {
  Router,
  Request,
  Response,
} from "express";
import { validate, ValidationError } from "class-validator";

import User from "../entities/User";

const mapError = (errors: ValidationError[]) => {
  return errors.reduce((prev: any, err) => {
    console.log("에러 정보: ", err);
    prev[err.property] = Object.entries(err.constraints)[0][1];
    
    return prev;
  }, {});
}

const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    let errors: any = {};

    // 1. 이메일과 유저이름이 이미 사용되고 있는지 확인
    const emailUser = await User.findOneBy({ email });
    const usernameUser = await User.findOneBy({ username });

    // 2. 이미 있다면, errors 객체에 넣기
    if (emailUser) {
      errors.email = "이미 사용중인 Email 입니다.";
    }

    if (usernameUser) {
      errors.username = "이미 사용중인 Username 입니다.";
    }

    // 3. errors 에 값이 있다면, errors 를 response 로 응답하기
    if (Object.keys(errors).length) {
      return res.status(400).json(errors);
    }

    // 4. errors 에 값이 없다면, User 객체 생성
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;

    // 5. 생성한 User 의 유효성 검사
    const validationErrors = await validate(user);

    if (validationErrors.length) {
      return res.status(400).json(mapError(validationErrors));
    }

    // Database 의 User table 에 INSERT
    await user.save();

    return res.json(user);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // TODO: 여기 할 차례
    // TODO: 여기 할 차례
    // TODO: 여기 할 차례
  } catch (error) {
    //
  }
};

const router = Router();
router.post("/register", register);
router.post("/login", login);

export default router;