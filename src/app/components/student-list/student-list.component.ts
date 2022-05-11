import { Component, OnInit } from '@angular/core';
import { StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    
  }

}
