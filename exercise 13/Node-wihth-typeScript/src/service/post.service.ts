import { Post, PostModel } from "../models/post.models";


export type CreatePostInput = Omit<Post, "createdAt" | "_id">;
export async function createPost(data:CreatePostInput):Promise<Post>{
    const post = new PostModel(data)

    return await post.save()
    
}

