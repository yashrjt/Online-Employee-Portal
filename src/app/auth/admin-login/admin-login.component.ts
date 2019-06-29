import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../../auth/login-info'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private logginInfo: LoginInfo;




  ngOnInit() {
  }



}
