import { Injectable } from '@angular/core';
import { HttpInterceptor , HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//实现HttpInterceptor
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next:HttpHandler) {
    let authReq: any;
    //查看当前拦截到的httprequest 是哪
    console.log(req.url)
    //两个登录页面(employee and admin)
    if(req.url != "http://localhost:4200/auth/emplogin" && req.url !="http://localhost:4200/admlog" ){
      //检测token是否存在
      if(localStorage.getItem("expire")){
        const token = localStorage.getItem("expire");
        authReq = req.clone({setHeaders:{"jwtHeader":token}})
        return next.handle(authReq);
      }

    }
    authReq = req.clone({setHeaders:{}});
    return next.handle(authReq);

  }

  constructor() { }
}
