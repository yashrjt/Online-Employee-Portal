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
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyLeaveComponent,
    UpdateTimesheetComponent,
    ViewEmpLeavereportComponent,
    ViewEmpsalaryreportComponent,
    ViewTimesheetReportComponent,
    AdminLoginComponent,
    EmployeeLoginComponent
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
