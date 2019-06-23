import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './domain/employee';
import { Address } from './domain/address';
import { User } from './domain/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private API = "//localhost:8080/";
  private adminUrl: string;

  constructor(private http:HttpClient) {
    this.adminUrl = this.API + "addemployee";
   }

   public saveEmployeeInformation(employee: Employee){
     return this.http.post<Employee>(this.adminUrl, employee);
   }

   public findAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.API + "employees");
   }
}
