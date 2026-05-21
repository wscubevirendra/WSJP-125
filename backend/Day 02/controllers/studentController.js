import StudentModel from "../models/studentModel.js";
const createStudent = async (req, res) => {
    try {
        const { name, email, age, city } = req.body;
        const student = await StudentModel.findOne({ email: email })

        if (student) {
            return res.status(200).json({
                message: "Student already exist",
                success: false
            })
        };

        await StudentModel.create({
            name,
            email,
            age,
            city
        })



        res.status(201).json({
            message: "Student accound create successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


const getStudent = async (req,res) => {
    try {
        //according to id find
        //limit use --query
        const limit = parseInt(req.query.limit);
        const student = await StudentModel.find().limit(limit);

        res.status(200).json({
            message: "Student data fetch",
            success: true,
            students: student
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await StudentModel.findById(id);
        if (!student) {
            return res.status(404).json({
                message: "Student record not found",
                success: false
            })
        }

        await StudentModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Student record delete",
            success: true
        })

    } catch (error) {

    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await StudentModel.findById(id);
        if (!student) {
            return res.status(404).json({
                message: "Student record not found",
                success: false
            })
        }

        await StudentModel.updateOne(
            { _id: id },
            { $set: { status: !student.status } }
        )

        res.status(200).json({
            message: "Student record update",
            success: true,

        })

    } catch (error) {

    }
}



export {
    createStudent, getStudent, deleteStudent, updateStudent
}