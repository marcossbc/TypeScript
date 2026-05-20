import { Request, Response } from "express";
import { LoginBody } from "../types/LoginBody";
export const Login =(req:Request<{},{},LoginBody> ,res:Response)=>{
    const {email, password}= req.body;

    if(!email || !password){
        return res.status(400).json({
              message:" email , password in valid"

        })
    }
     return res.status(200).json({
        message:"user login"
    })

}