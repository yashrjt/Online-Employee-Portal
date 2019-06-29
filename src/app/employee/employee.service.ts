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



  

  private url = 'http://localhost:8081';
  constructor(private http:HttpClient) {}


  

  updateTimeSheet(id:number, timesheet:Object){
    console.log(timesheet);
    // return this.http.put(this.url + `/timesheet/${id}`, timesheet)
    return this.http.post(this.url + `/timesheet/${id}`, timesheet) 
     .pipe(map((res: Response) => res.json())); 
      
  }

  // get timesheet info from backend
  getTimeSeet():Observable<object>{
    return this.http.get<any[]>(this.url + "/findTimeSheet");
  }

  // add one leave request to backend
  applyLeave(leave:any):Observable<object>{
    return this.http.post(this.url + "/save", leave);
  }

 

//   authenticate(username, password) {
//     return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
//      map(
//        userData => {
//         sessionStorage.setItem('username',username);
//         let tokenStr= 'Bearer '+userData.token;
//         sessionStorage.setItem('token', tokenStr);
//         return userData;
//        }
//      )

//     );
//   }


// isUserLoggedIn() {
//   let user = sessionStorage.getItem('username')
//   //console.log(!(user === null))
//   return !(user === null)
// }

// logOut() {
//   sessionStorage.removeItem('username')
// }






  


}
