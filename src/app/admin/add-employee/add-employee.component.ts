import { Component, OnInit } from '@angular/core';
import { Employee } from '../domain/employee'; 
import { Address } from '../domain/address';
import { User } from '../domain/user';
import { AdminService} from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee();
  address = new Address();
  user = new User();

  constructor(private adminService:AdminService, private route: ActivatedRoute, private router: Router) {
    this.employee.salution = 'Mr';
    this.employee.status = 'full-time';
    this.employee.gender = 'male';
    this.employee.department = 'JAVA';
    this.employee.middleName ='';
    this.address.address2='';
   }

  ngOnInit() {
  }

  createNewEmployee() {
    console.log(this.employee)
    console.log(this.address)
    console.log(this.user)
    this.adminService.saveEmployeeInformation(this.employee).subscribe();
  }

}
