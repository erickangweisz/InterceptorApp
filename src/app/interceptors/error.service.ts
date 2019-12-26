import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpInterceptor,
         HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpErrorResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ErrorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(error: HttpErrorResponse) {
    console.warn('error', error);
    return throwError('custom error');
  }
}
