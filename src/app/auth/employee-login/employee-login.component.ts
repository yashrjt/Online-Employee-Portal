import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, NgModule} from '@angular/core';
import { Authuser } from 'src/app/auth/model/authuser';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormsModule} from  '@angular/forms';



@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit, AfterViewChecked{
  email:any;
  password:any;
  // @ViewChild('email') email:any;
  // @ViewChild("password") password:any;

  authuser:Authuser;
  token:string;
  
  constructor(private service: AuthService, private router:Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    
  }

  emploginfunc(){
    console.log(this.email);
    this.authuser = new Authuser();
    this.authuser.username=this.email;
    this.authuser.password = this.password;
    this.authuser.role = "employee";
    console.log(this.authuser);
 
    this.service.emplogin(this.authuser).subscribe(
      resp=>console.log(resp)
   
      
    )


    // this.service.login(this.authuser).subscribe((resp:string)=>this.token = resp);
    // console.log(this.token);
  }
}
