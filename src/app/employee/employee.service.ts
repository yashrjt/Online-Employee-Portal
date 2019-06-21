import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080';
  constructor(private http:HttpClient) {}

  

  updateTimeSheet(id:number, timesheet:Object):Observable<Object>{
    console.log(timesheet);
    return this.http.put(this.url + `/timesheet/${id}`, timesheet);
  }

  // get timesheet info from backend
  getTimeSeet():Observable<object>{
    return this.http.get<any[]>(this.url + "/findTimeSheet");
  }

  // add one leave request to backend
  applyLeave(leave:any):Observable<object>{
    return this.http.post(this.url + "/save", leave);
  }






  


}
