import express from "express";
const studentRouter = express.Router();
import { createStudent, getStudent, deleteStudent, updateStudent } from "../controllers/studentController.js"

studentRouter.post("/create", createStudent);
studentRouter.get("/", getStudent);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.patch("/status-update/:id", updateStudent);


export default studentRouter;