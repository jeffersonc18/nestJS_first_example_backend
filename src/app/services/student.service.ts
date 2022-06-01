import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Student} from '../interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }



  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.BASE_URL}/student`);

  }

  createStudent(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(`${this.BASE_URL}/student/create`,student);
  }

  getStudent(id:string):Observable<Student>{
    return this.httpClient.get<Student>(`${this.BASE_URL}/student/${id}`);
  }

  updateStudent(id:string,student:Student):Observable<Student>{
    return this.httpClient.put<Student>(`${this.BASE_URL}/student/update?studentID=${id}`,student)
  }

  deleteStudent(id:string):Observable<Student>{
    return this.httpClient.delete<Student>(`${this.BASE_URL}/student/delete?studentID=${id}`);
  }
}
