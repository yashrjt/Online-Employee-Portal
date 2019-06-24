import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';
import { Authuser } from 'src/app/auth/pojo/authuser';
import { AppService } from 'src/app/app.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit, AfterViewChecked{
  @ViewChild('email') email:any;
  @ViewChild("password") password:any;

  authuser:Authuser;
  token:string;
  
  constructor(private service: AppService, private router:Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    
  }

  emploginfunc(){
    localStorage.setItem("lei", "value");
    this.authuser = new Authuser();
    this.authuser.username=this.email.nativeElement.value;
    this.authuser.password = this.password.nativeElement.value;
    this.authuser.role = "employee";
    console.log(this.authuser);
    // console.log(this.authuser.username);
    // console.log(this.email.nativeElement.value);
    // console.log(this.password.nativeElement.value);
    this.service.login(this.authuser).subscribe(
      resp=>
      localStorage.setItem(this.authuser.username, resp)
      
    )
    // this.service.login(this.authuser).subscribe((resp:string)=>this.token = resp);
    // console.log(this.token);
  }
}
