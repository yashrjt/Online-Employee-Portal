import { Component, OnInit } from '@angular/core';
import { AdminService} from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salary } from '../domain/salary';
import { Employee } from '../domain/employee';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  salary = new Salary();
  employees:any
  errorinfo:string
  days:number[];


  constructor(private adminService : AdminService) {
    this.days = [5, 15, 25, ]
  }

  ngOnInit() {
    this.adminService.findAllEmployees().subscribe(resp=>{
      if(resp == null){
        this.errorinfo = "login expiration"
      }else{
        this.employees = resp;
        console.log(this.employees);
      }
    });    
   
  }

  addSalary(){
    
    console.log("salaryid " + this.salary.empId)
    this.adminService.addSalary(this.salary).subscribe();
  }

}
