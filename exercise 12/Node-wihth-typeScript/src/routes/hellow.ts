import express from "express";
import { sayHello } from "../controllers/UserS";

const router = express.Router();

router.get("/", sayHello);

export default router;