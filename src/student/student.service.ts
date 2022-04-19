import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private studentList: string[] = ['juan', 'luis', 'diana'];
  getLastStudent(): string[] {
    return this.studentList;
  }
}
