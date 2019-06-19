import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { UpdateTimesheetComponent } from './employee/update-timesheet/update-timesheet.component';
import { ViewEmpLeavereportComponent } from './employee/view-emp-leavereport/view-emp-leavereport.component';
import { ViewEmpsalaryreportComponent } from './employee/view-empsalaryreport/view-empsalaryreport.component';
import { ViewTimesheetReportComponent } from './employee/view-timesheet-report/view-timesheet-report.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddSalaryComponent } from './admin/add-salary/add-salary.component';
import { AddTimesheetComponent } from './admin/add-timesheet/add-timesheet.component';
import { AddLeaveComponent } from './admin/add-leave/add-leave.component';
import { ViewEmpReportComponent } from './admin/view-emp-report/view-emp-report.component';
import { ViewLeaveReportComponent } from './admin/view-leave-report/view-leave-report.component';
import { ViewSalaryReportComponent } from './admin/view-salary-report/view-salary-report.component';

@NgModule({
  declarations: [
    AppComponent,
    // ApplyLeaveComponent,
    UpdateTimesheetComponent,
    ViewEmpLeavereportComponent,
    ViewEmpsalaryreportComponent,
    ViewTimesheetReportComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    SignupComponent,
    AddEmployeeComponent,
    AddSalaryComponent,
    AddTimesheetComponent,
    AddLeaveComponent,
    ViewEmpReportComponent,
    ViewLeaveReportComponent,
    ViewSalaryReportComponent
  ],
  imports: [
    BrowserModule,
    
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
