import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';
import {Timesheet} from 'src/app/employee/model/timesheet';


@Component({
  selector: 'app-update-timesheet',
  templateUrl: './update-timesheet.component.html',
  styleUrls: ['./update-timesheet.component.css']
})
export class UpdateTimesheetComponent implements OnInit, AfterViewInit {
  @ViewChild('projCode') projCode:any;
  @ViewChild("workingHour") workingHour:any;
  @ViewChild("date") date:any;
  @ViewChild("action") action:any;
  @ViewChild("id") id:any;
  @ViewChild("name") name:any;

 
  timeSheet:Timesheet;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  updateTime(){
    this.timeSheet = new Timesheet();
    console.log(this.projCode.nativeElement.value);
    console.log(this.workingHour.nativeElement.value);
    console.log(this.date.nativeElement.value);
    console.log(this.action.nativeElement.value);
    console.log(this.id.nativeElement.textContent);
    console.log(this.name.nativeElement.textContent);
    

    // get data from html and save to a obj 
    this.timeSheet.action = this.action.nativeElement.value;
    this.timeSheet.employeeId = Number(this.id.nativeElement.textContent);
    this.timeSheet.employeeName = this.name.nativeElement.textContent;
    this.timeSheet.endDate = this.date.nativeElement.value;
    this.timeSheet.projectHours = this.workingHour.nativeElement.value;
    this.timeSheet.projectId = Number(this.projCode.nativeElement.value);

    //call method from employee service pass obj to back end
    this.service.updateTimeSheet(this.timeSheet.employeeId, this.timeSheet).subscribe();
  }

}
