import {
  Request,
  Response,
  NextFunction,
} from "express";
import jwt from "jsonwebtoken";
import User from "../entities/User";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("쿠키: ", req.cookies);
    
    const token = req.cookies.token;

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOneBy({ username });

    console.log("유저: ", user);

    if (!user) {
      throw new Error("Unauthenticated");
    }

    // 유저 정보를 res.local.user 에 넣어주기
    res.locals.user = user;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

export default authMiddleware;