import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AppService } from '../app.service';

import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; 
   route: ActivatedRouteSnapshot;

 constructor(private app:AppService,private jwt:JwtHelperService){}

canActivate():boolean{
  return !this.jwt.isTokenExpired(localStorage.getItem('token'));  
}

  
}
