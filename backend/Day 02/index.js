import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routers/studentRouter.js';
const server = express();
server.use(express.json());
server.use("/student", studentRouter)


mongoose.connect("mongodb://localhost:27017/wscube").then(
    () => {
        server.listen(5000, () => {
            console.log("Server is running port number 5000")
        });

        console.log("Database connnected")
    }
).catch(
    () => {
        console.log("Unable to connect DataBase")
    }
)

