import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTimesheetReportComponent } from './employee/view-timesheet-report/view-timesheet-report.component';
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
<<<<<<< HEAD
  
  
=======
>>>>>>> e1b565ccf52bc34055af18d3e888c2492fe71127
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
