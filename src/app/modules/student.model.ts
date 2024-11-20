import { model, Schema } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim:true, // trim delete white space 
    maxLength: [20, 'Maximum allowed length is 20'],
    required: [true, 'First Name is required'],
  },
  middleName: {
    type: String,
    trim:true, // trim delete white space 
    required:true,
    validate: {
      validator: function(value){
        const lastNameStr = value.charAt(0).toUpperCase() + value.slice(1)
        return lastNameStr === value
      },
      message: '{VALUE} is not in capitalize format.'
    }

  },
  lastName: {
    type: String,
    trim:true, // trim delete white space 
    required: [true, 'Last Name is required'],
  },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim:true, // trim delete white space 
    required: [true, 'Father name is required'],
  },
  fatherOccupation: {
    type: String,
    trim:true, // trim delete white space 
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim:true, // trim delete white space 
    required: [true, 'Father Contract Number is required'],
  },
  motherName: {
    type: String,
    trim:true, // trim delete white space 
    required: [true, 'Mother name is required'],
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contract Number is required'],
  },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name is must required'],
  },
  gender: {
    type: String,
    enum: { values: ['male', 'female', 'other'], message: "The gender field can only be one of the following 'male','female', or 'other'." },
    required: true
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: true
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true
  },
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
