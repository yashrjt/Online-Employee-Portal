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
  salary;
  employee_id:number;


  constructor(private adminService : AdminService) {
    this.salary = new Salary();
  }

  ngOnInit() {
   
  }

  addSalary(){
    console.log(this.salary);
    console.log(this.employee_id);

    this.adminService.findEmployeeById(this.employee_id).subscribe(
      data =>{
        this.salary.employee = data;
        console.log(this.salary);
      }, error => console.log(error)
    );
    
    this.adminService.addSalary(this.salary).subscribe();
  }

}
