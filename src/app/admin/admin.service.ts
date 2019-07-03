import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './domain/employee';
import { Salary } from './domain/salary';
import { TotalInfo } from './domain/total-info';
import { Project } from './domain/project';
import { Timesheet } from '../employee/model/timesheet';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {
  private API = "//localhost:8102/auth/admin";
  private url1 = "//localhost:8102/auth"
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


  //find all employee by admin authorization
  public findAllEmployees(){
    return this.http.get<Employee[]>(this.url1 + "/emp", {headers:this.headers, responseType:"json"})
  }


  //find all project by admin authorization
   public findAllProjects(){
    return this.http.get<Project[]>(this.url1 + "/proj",{headers:this.headers, responseType:"json"} )
  }


  public addTimesheet(timesheet:Timesheet){
    return this.http.post(this.API+ "/timesheet", timesheet, {headers:this.headers, responseType:"text"})
  }

  public addSalary(salary: Salary){
    console.log(salary)
    return this.http.post(this.API + "/salary", salary, {headers:this.headers, responseType:"text"});
  }
 

   



   public findEmployeeById(id: number): Observable<any>{
     console.log("in get")
     return this.http.get(this.API + "findEmployee/" + id);
   }

   

   public findAllSalary(): Observable<any[]>{
     return this.http.get<Salary[]>(this.API + "salarys");
   }
}
