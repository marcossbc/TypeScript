import { Request, Response } from "express";
import { request } from "node:http";
import { AuthRequest } from "../middleware/auth.middleware";
import { User } from "../types/user";

interface HellowRequeast extends Request {
  query:{
    name:string;
  };
}

// interface HelloRequest extends Request {
//   query: {
//     name: string;
//   };
// }
export const sayHello = (req: HellowRequeast, res: Response) => {
  const name = req.query.name;


  return res.status(200).json({
    greeting: `Hello, ${name.toUpperCase()}!`,
  });
};

export const getProfile = (req:AuthRequest, res:Response<User>)=>{

  if(!req.user){
    return res.status(401).json({
      message:"unsaravted"
    } as any)
  }

    return res.json(req.user);

}