import { Request, Response } from "express";
import { request } from "node:http";

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