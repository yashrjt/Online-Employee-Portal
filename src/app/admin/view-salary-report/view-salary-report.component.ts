import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Salary } from '../domain/salary';

@Component({
  selector: 'app-view-salary-report',
  templateUrl: './view-salary-report.component.html',
  styleUrls: ['./view-salary-report.component.css']
})
export class ViewSalaryReportComponent implements OnInit {
  salarys:Salary[];

  constructor(private adminService: AdminService) {

   }

  ngOnInit() {
    this.adminService.findAllSalary().subscribe( data =>{
      this.salarys = data;
      console.log(this.salarys);
    })
  }

}
