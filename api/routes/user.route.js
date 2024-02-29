import express from "express";
import { test } from "../controllers/user.controller.js";
import Token from "../models/token.js";

const router = express.Router();

router.get("/test", test);

export default router;
