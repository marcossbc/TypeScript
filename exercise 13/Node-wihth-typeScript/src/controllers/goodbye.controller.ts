import { Request, Response } from "express"


interface RequeastGoodBY extends Request {
    query:{
        name :string
    }
}
export const goodBy = (req:RequeastGoodBY, res:Response) => {
    const name = req.query.name

return res.status(200).json({
    farewell: `Goodbye, ${name}`,
  });

}
