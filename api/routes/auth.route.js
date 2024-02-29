import express from "express";
import { signup } from "../controllers/auth.controller.js";
import Token from "../models/token.js";
import { confirm } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/confirm/:token", confirm);

export default router;
