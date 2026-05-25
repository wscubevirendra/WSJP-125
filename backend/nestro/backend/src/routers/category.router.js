import express from "express";
const router = express.Router();
import { create, get } from "../controllers/category.controller.js";

router.get("/", get);
router.post("/create", create);

export default router