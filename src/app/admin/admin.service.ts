import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './domain/employee';
import { Salary } from './domain/salary';
import { TotalInfo } from './domain/total-info';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {
  private API = "//localhost:8102/auth/admin";
  private adminUrl: string;
 
  headers:any = new Headers( {  
    'Content-Type':  'application/json',
  });

  constructor(private http:HttpClient) {
  }
   ngOnInit(){
  
   }
   

   //pass 3 objects were wrapper in a object
   public saveEmployeeInformation(info:TotalInfo ){
     return this.http.post(this.API+ "/emp", info, {headers:this.headers, responseType:"text"});
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
