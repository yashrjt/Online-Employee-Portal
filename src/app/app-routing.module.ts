import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { UpdateTimesheetComponent } from './employee/update-timesheet/update-timesheet.component';
import { ViewEmpLeavereportComponent } from './employee/view-emp-leavereport/view-emp-leavereport.component';
import { ViewEmpsalaryreportComponent } from './employee/view-empsalaryreport/view-empsalaryreport.component';
import { ViewTimesheetReportComponent } from './employee/view-timesheet-report/view-timesheet-report.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { empty } from 'rxjs';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddLeaveComponent } from './admin/add-leave/add-leave.component';
import { AddSalaryComponent } from './admin/add-salary/add-salary.component';
import { AddTimesheetComponent } from './admin/add-timesheet/add-timesheet.component';
import { ViewEmpReportComponent } from './admin/view-emp-report/view-emp-report.component';
import { ViewLeaveReportComponent } from './admin/view-leave-report/view-leave-report.component';
import { ViewSalaryReportComponent } from './admin/view-salary-report/view-salary-report.component';

const routes: Routes = [
  
  {
    path:"applyleave", component:ApplyLeaveComponent
  },
  {
    path:"updatetimesheet", component:UpdateTimesheetComponent
  },
  {
    path:"viewempleavereport", component:ViewEmpLeavereportComponent
  },
  {
    path:"viewempsalaryreport", component:ViewEmpsalaryreportComponent
  },
  {
    path:"viewtimesheetreport", component:ViewTimesheetReportComponent
  },
  {
    path:"adminlogin", component:AdminLoginComponent
  },
  {
    path:"employeelogin", component:EmployeeLoginComponent
  },
  {
    path:"addemployee", component:AddEmployeeComponent
  },
  {
    path:"addleave", component:AddLeaveComponent
  },
  {
    path:"addsalary", component:AddSalaryComponent
  },
  {
    path:"addtimesheet", component:AddTimesheetComponent
  },
  {
    path:"viewempreport", component:ViewEmpReportComponent
  },
  {
    path:"viewleavereport", component:ViewLeaveReportComponent
  },
  {
    path:"viewsalaryreport", component:ViewSalaryReportComponent
  },
  {
    path:"adminviewtimesheetreport", component:ViewTimesheetReportComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
