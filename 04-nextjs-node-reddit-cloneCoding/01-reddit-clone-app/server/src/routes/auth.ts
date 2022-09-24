import {
  Router,
  Request,
  Response,
} from "express";
import { 
  validate, 
  ValidationError,
  isEmpty,
} from "class-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import userMiddleware from "../middlewares/user";
import authMiddleware from "../middlewares/auth";

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
    let errors: any = {};

    // 1. 빈값이 있다면, 에러로 처리
    if (isEmpty(username)) {
      errors.username = "사용자 이름은 비워둘 수 없습니다.";
    }

    if (isEmpty(password)) {
      errors.password = "비밀번호는 비워둘 수 없습니다.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    // 2. Database 에서 유저 찾기
    const user = await User.findOneBy({ username });

    if (!user) {
      return res.status(404).json({ username: "사용자 이름이 등록되지 않았습니다." });
    }

    // 3. User 가 있다면, 비밀번호 비교하기
    const passwordMatches = await bcrypt.compare(password, user.password);

    // 4. 비밀번호가 다르면, 에러로 처리
    if (!passwordMatches) {
      return res.status(401).json({ password: "비밀번호가 잘못 되었습니다." });
    }

    // 5. 비밀번호가 맞다면, Token 생성
    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    // 6. Cookie 저장
    res.set("Set-Cookie", cookie.serialize("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    }));

    return res.json({ user, token });
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const logout = async (_, res: Response) => {
  res.set(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0),
      path: "/",
    })
  );

  res.status(200).json({ success: true });
}

const me = async (_, res: Response) => {
  const user = res.locals.user;
  return res.json(user);
}

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", userMiddleware, authMiddleware, logout);
router.get("/me", userMiddleware, authMiddleware, me);

export default router;