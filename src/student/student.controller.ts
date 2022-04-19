import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): string[] {
    return this.studentService.getLastStudent();
  }

  @Post('/create')
  createStudent(@Res() res, @Body() body) {
    return res.status(HttpStatus.CREATED).json({ body });
  }
}
