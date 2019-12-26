import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let params = new HttpParams().append('page', '2');
    params = params.append('name', 'Jonatan Arrocha');

    /*const headers = new HttpHeaders({
      'token-user': 'AAAABBBBCCCC12345678'
    });*/

    return this.http.get('https://reqres.in/api/user', {
      params,
      //headers
    }).pipe(
      map(res => {
        return res['data'];
      }),
      catchError(this.handlerError)
    );
  }

  handlerError(error: HttpErrorResponse) {
    console.warn('error', error);
    return throwError('custom error');
  }
}
