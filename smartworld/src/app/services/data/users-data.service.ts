import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private httpClient: HttpClient) { }

  listUsersPost(loginUser): Observable<any> {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache');
    console.log(httpHeaders);
    return this.httpClient
      .post('http://localhost:8081/loginuser', loginUser);
  }

  insertUser(registerObj): Observable<any> {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache');
    console.log(httpHeaders);
    return this.httpClient
      .post('http://localhost:8081/insertnewuser', registerObj);
  }
}
