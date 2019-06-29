import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //header
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };



  token:string = localStorage.getItem("token");

  employeeurl:string = "http://localhost:8100/emp"
   //headerr
  headers:any = new Headers( {  
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'  
  });
  constructor(private http:HttpClient) {}


  

  updateTimeSheet(id:number, timesheet:Object){
    console.log(timesheet);
    // return this.http.put(this.url + `/timesheet/${id}`, timesheet)
    return this.http.post(this.employeeurl + `/timesheet/${id}`, timesheet) 
     .pipe(map((res: Response) => res.json())); 
      
  }

  // get timesheet info from backend
  getTimeSeet():Observable<object>{
    return this.http.get<any[]>(this.employeeurl + "/timesheet"+`${this.token}`);
  }

  // add one leave request to backend
  applyLeave(leave:any):Observable<object>{
    return this.http.post(this.employeeurl + "/save", leave);
  }

 








  


}
