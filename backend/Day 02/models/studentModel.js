import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true


    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 26

    },
    city: {
        type: String,
        enum: ["Jaipur", "Jodhpur"]
    },

    status: {
        type: Boolean,
        default: true
    }
})

const StudentModel = mongoose.model("students", studentSchema);

export default StudentModel;
