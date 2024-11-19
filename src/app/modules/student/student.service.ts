import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;     // result will go to controller
}
const getAllStudentFromDB = async () => {
    const result = await StudentModel.find();
    return result; // result will go to controller
}
export const StudentServices = {    //to send export func name
    createStudentIntoDB,
    getAllStudentFromDB
}