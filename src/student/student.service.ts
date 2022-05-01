import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';

@Injectable()
export class StudentService {

  constructor(@InjectModel('Student') private readonly studentModel: Model<IStudent>){}
  

  async getStudents(): Promise<IStudent[]>{
    const students = await this.studentModel.find();
    return students;
    
  }

  async getStudent(studentID: string): Promise<IStudent>{
    const student = await this.studentModel.findById(studentID);
    return student;

  }

  async createStudent(createStudentDTO: CreateStudentDTO): Promise<IStudent>{

    const studentCreated = new this.studentModel(createStudentDTO);
    await studentCreated.save();
    return studentCreated;


  }

  async updateStudent(studentID: string, createStudentDTO: CreateStudentDTO): Promise<IStudent>{

    const updatedStudent = await this.studentModel.findByIdAndUpdate(studentID,
    createStudentDTO,{new: true});
    return updatedStudent;

  }

  async deleteStudent(studentID: string): Promise<IStudent>{

    const deletedStudent = await this.studentModel.findByIdAndDelete(studentID);
    return deletedStudent;

  }


}
