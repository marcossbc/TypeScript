

import express, { Request, Response } from "express"
import { registerUser } from "../controllers/user.controllers";
import { Login } from "../controllers/LoginUser";

type query ={
    page?:string;
    limit?:string

}
type Params ={
    id:string;
}
type Body={
    email: string;
    price:number
}
const router = express.Router();

router.post("/", registerUser)
router.get("/", Login)
router.get("/products/:id", (req:Request<{}, {}, query>, res:Response)=>{
     const { page, limit } = req.query;
  res.send(`Page: ${page}, Limit: ${limit}`);

})

router.put("/products/:id", (req:Request<Params, {}, Body>, res:Response)=>{
    const {id}= req.params
    const {email, price} = req.body

    res.send(`Updated user ${id} with email ${email}  with price ${price}`);
})
export default router;
