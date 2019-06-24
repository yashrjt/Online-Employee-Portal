import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Authuser } from './auth/pojo/authuser';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //headerr

//   httpOptions = {
//    headers: new HttpHeaders({
//      'Content-Type':  'application/json',
//      'Authorization': 'my-auth-token'
//    })
//  };

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token',
    // 'responseType': 'text'
  })
};



 


 constructor(private http: HttpClient) { }

  //login get response token or null;
  login(authuser: Authuser) {
  //  return this.http.post("http://localhost:8100/token", authuser, this.httpOptions); 
  return this.http.post("http://localhost:8100/token", JSON.stringify(authuser), 
  {headers: {'Content-Type': 'application/json', 'Authorization': 'my-auth-token'},responseType:'text'}); 

  }
}