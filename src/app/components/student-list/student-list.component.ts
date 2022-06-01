import { Component, OnInit } from '@angular/core';
import { Student} from '../../interfaces/Student';



import { StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  
  studentList:Student[] = [];
  


  
 
  
  constructor(private studentService: StudentService) { }

  ngOnInit(){
    this.getStudents();
  } 

  
  getStudents(){
    
    this.studentService.getStudents()
    .subscribe(
      res => {
        console.log((res as any).students);
        this.studentList=((res as any).students);
        

      },
      err => console.log(err)
    );
  }

  deleteStudent(studentID:any){
    this.studentService.deleteStudent(JSON.parse(JSON.stringify(studentID))) 
    .subscribe(
      res => {
        this.getStudents();
        
      },
      err => console.log(err)
    )
  }

  
}
