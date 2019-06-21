import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './auth/employee-login/employee-login.component';

import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,  
    CoreModule,
    EmployeeModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
