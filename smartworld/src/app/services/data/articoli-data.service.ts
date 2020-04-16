import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  constructor(private httpClient: HttpClient) { }

  listArticoli() {
    return this.httpClient.get('http://localhost:5000/api/smartphone/');
  }

  insertUser() {
    return this.httpClient.post('http://localhost:8081/insertnewuser',
      {
        "nome": "massimiliano",
        "cognome": "castorina",
        "email": "massimiliano.castorina@bitsrl.net",
        "username": "soffino",
        "password": "1234"
      }
    );
  }
}
