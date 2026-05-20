import express from "express";
import { handlePost } from "../controllers/post.contorlls";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Posts route working")
});

router.post("/", handlePost);

export default router;