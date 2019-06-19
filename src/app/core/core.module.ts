import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { EmployeeRoutingModule } from '../employee/employee.routing.module';
import { ApplyLeaveComponent } from '../employee/apply-leave/apply-leave.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ApplyLeaveComponent],
  imports: [
    CommonModule,RouterModule, EmployeeRoutingModule
  ],
  exports:[ HeaderComponent, FooterComponent]
})
export class CoreModule { }
