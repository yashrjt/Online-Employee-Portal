import { Component, OnInit } from '@angular/core';
import {Timesheet} from 'src/app/employee/model/timesheet'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-timesheet-report',
  templateUrl: './view-timesheet-report.component.html',
  styleUrls: ['./view-timesheet-report.component.css']
})
export class ViewTimesheetReportComponent implements OnInit {
  timeSheet:Timesheet;


  constructor(private service:EmployeeService) { }

  ngOnInit() {
    console.log("test timesheet")
    
    //get employee timesheet info from backend
    this.service.getTimeSeet().subscribe((data:any)=>console.log(data.employeeId));
    
  }

}
