import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './domain/employee';
import { Address } from './domain/address';
import { User } from './domain/user';
import { Salary } from './domain/salary';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {
  private API = "//localhost:8102/auth/admin";
  private adminUrl: string;
 


  constructor(private http:HttpClient) {
  }
   ngOnInit(){
  
   }

   public saveEmployeeInformation(employee: Employee, user:User, address:Address ){
     return this.http.post<Employee>(this.API+ "/emp", employee);
   }

   public findAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.API + "employees");
   }

   public findEmployeeById(id: number): Observable<any>{
     console.log("in get")
     return this.http.get(this.API + "findEmployee/" + id);
   }

   public addSalary(salary: Salary){
     console.log("in addSalary")
     return this.http.post<Salary>(this.API + "addsalary", salary);
   }

   public findAllSalary(): Observable<any[]>{
     return this.http.get<Salary[]>(this.API + "salarys");
   }
}
