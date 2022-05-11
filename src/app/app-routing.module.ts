import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';


const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path:'student',
    component: StudentListComponent
  },
  {
    path:'student/create',
    component: StudentFormComponent
  },
  {
    path:'student/edit/:id',
    component: StudentFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
