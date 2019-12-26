import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor,
         HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TokenService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-user': 'AAAABBBBCCCC12345678'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}
