import express from "express"
import { goodBy } from "../controllers/goodbye.controller";

const router = express.Router();

router.get("/", goodBy)
export default router

