import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ SignupComponent, EmployeeLoginComponent, AdminLoginComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[ EmployeeLoginComponent, AdminLoginComponent]
  
})
export class AuthModule { }
