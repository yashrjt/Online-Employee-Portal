import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLeaveReportComponent } from './view-leave-report/view-leave-report.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewTimesheetReportComponent } from './view-timesheet-report/view-timesheet-report.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';

@NgModule({
  declarations: [ViewLeaveReportComponent, AddLeaveComponent, ViewTimesheetReportComponent, AddTimesheetComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
