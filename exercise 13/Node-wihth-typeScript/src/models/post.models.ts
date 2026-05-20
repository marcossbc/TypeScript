import mongoose, { Document, Schema } from "mongoose";

export interface Post extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

const PostSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

export const PostModel = mongoose.model<Post>("Post", PostSchema)