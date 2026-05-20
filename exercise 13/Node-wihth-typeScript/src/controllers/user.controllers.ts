import { Request, Response } from "express";

import { createUser } from "../types/user";

export const registerUser =(req:Request<{},{}, createUser>, res:Response) => {

    const {email, name, password} = req.body

    if(!name || !email || !password ){
        return res.status(400).json({
            message:"name , email , password in valid"
        })
    }



    return res.status(200).json({
        message:"user create seccuflly"
    })


}