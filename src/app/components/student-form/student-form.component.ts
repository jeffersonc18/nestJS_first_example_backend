import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/Student';
import { StudentService } from '../../services/student.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  
  

  student:Student = {

    code:0,
    name:'',
    photoURL:''
  };

  edit:boolean = false;

  constructor(
    private studentService:StudentService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    const parametro = this.activatedRoute.snapshot.params['id'];
    console.log(parametro+typeof(parametro));
  
    if(parametro){
      this.studentService.getStudent(parametro)
      .subscribe(
        res => {
        this.student=res;
        this.edit=true;
        }
      )
      
      }
    
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
