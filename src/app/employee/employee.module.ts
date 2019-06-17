import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmpsalaryreportComponent } from './view-empsalaryreport/view-empsalaryreport.component';
import { ViewEmpLeavereportComponent } from './view-emp-leavereport/view-emp-leavereport.component';
import { ViewTimesheetReportComponent } from './view-timesheet-report/view-timesheet-report.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';

@NgModule({
  declarations: [ViewEmpsalaryreportComponent, ViewEmpLeavereportComponent, ViewTimesheetReportComponent, UpdateTimesheetComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }