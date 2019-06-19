import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { UpdateTimesheetComponent } from './employee/update-timesheet/update-timesheet.component';
import { ViewEmpLeavereportComponent } from './employee/view-emp-leavereport/view-emp-leavereport.component';
import { ViewEmpsalaryreportComponent } from './employee/view-empsalaryreport/view-empsalaryreport.component';
import { ViewTimesheetReportComponent } from './employee/view-timesheet-report/view-timesheet-report.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
