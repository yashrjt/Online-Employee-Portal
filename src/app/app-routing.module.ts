import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { empty } from 'rxjs';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';


const routes: Routes = [
  
  {
    path:"adminlogin", component:AdminLoginComponent
  },
  {
    path:"employeelogin", component:EmployeeLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
