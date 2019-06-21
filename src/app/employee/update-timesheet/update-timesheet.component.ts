import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';

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

  code:string = "";
  hour:string = "";
  endDate: string = "";
  curAction:string="";
  empId:string="";
  empName:string="";

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  updateTime(){
    
    console.log(this.projCode.nativeElement.value);
    console.log(this.workingHour.nativeElement.value);
    console.log(this.date.nativeElement.value);
    console.log(this.action.nativeElement.value);
    console.log(this.id.nativeElement);
    console.log(this.name.nativeElement.text);
    this.code = this.projCode.nativeElement.value;
    this.hour = this.workingHour.nativeElement.value;
    this.endDate = this.date.nativeElement.value;
    this.curAction = this.action.nativeElement.value;
    this.empId = this.id.nativeElement.text;
    this.empName = this.name.nativeElement.text;
    
  }

}
