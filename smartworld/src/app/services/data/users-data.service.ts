import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  //res: any = [];

  constructor(private httpClient: HttpClient) { }
   listUsers() {
    return this.httpClient.get('http://localhost:5001/api/users/');
    // this.httpClient.get('http://localhost:5001/api/users/').subscribe(data => {
            
    //         data.forEach(function(value) {
    //           this.res.push(value);
    //         }
    //         console.log(this.res);

    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log("Client-side error occured.");
    //       } else {
    //         console.log("Server-side error occured.");
    //       }
    //     });
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
