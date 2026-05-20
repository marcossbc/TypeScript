import { Request, Response } from "express";
import { createPost, CreatePostInput } from "../service/post.service";

export const handlePost = async(req:Request<{},{}, CreatePostInput>, res:Response) => {

   try{
    const post = await createPost(req.body)
    res.status(201).json(post)

   }catch(error){
      console.log(error)
      res.status(500).json({ error: "Failed to create post" });

   }


}