import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body
        // will call service function to send this Data
        const result = await StudentServices.createStudentIntoDB(student)
        //send response to client
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result,
        })
    } catch (error) {
        console.log(error);
    }
}
export const StudentControllers = {        //It will use Router
    createStudent,
}