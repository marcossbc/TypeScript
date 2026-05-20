import { Request, NextFunction, Response } from "express";
import { User } from "../types/user";

export interface AuthRequest extends Request {
  user?: User;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user: User = {
    id: "1",
    name: "ahmed",
    email: "ahmed@gmail.com",
  };

  req.user = user;

  next();
};