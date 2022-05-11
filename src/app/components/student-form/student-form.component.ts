import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/Student';
import { StudentService } from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student:Student = {
    code:0,
    name:'',
    photoUrl:''
  };

  constructor(
    private studentService:StudentService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  submitStudent(){
    this.studentService.createStudent(this.student)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}
