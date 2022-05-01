  import { Body, Controller, Get, HttpStatus, Post, Put, Delete, Res, Param, NotFoundException, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './dto/create_student.dto';


@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  async getStudents(@Res() res){
    const students = await this.studentService.getStudents();
    return res.status(HttpStatus.OK).json({
      students: students 
    });
  }

  @Post('/create')
  async createStudent(@Res() res, @Body() createStudentDTO: CreateStudentDTO) {
    const student = await this.studentService.createStudent(createStudentDTO);
    return res.status(HttpStatus.CREATED).json({ 
      message: 'Student Succesfully Created', 
      student: student 
    });
  }

  @Get('/:studentID')
  async getStudent(@Res() res, @Param('studentID') studentID){
    const student = await this.studentService.getStudent(studentID);
    if (!student) throw new NotFoundException('Student Does not exists');
    return res.status(HttpStatus.OK).json(student); 

  }

  @Delete('/delete')
  async deleteStudent(@Res() res,@Query('studentID') studentID){
    const studentDeleted = await this.studentService.deleteStudent(studentID);
    if (!studentDeleted) throw new NotFoundException('Student Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Student Deleted Successfully',
      studentDeleted
    })

  }

  @Put('/update')
  async updateStudent(@Res() res,@Body() createStudentDTO: CreateStudentDTO,@Query('studentID') studentID){
   const studentUpdated = await this.studentService.updateStudent(studentID, createStudentDTO);
   if (!studentUpdated) throw new NotFoundException('Student Does not exists');
   return res.status(HttpStatus.OK).json({
     message: 'Student Updated Successfully',
     studentUpdated
   })

  }
} 