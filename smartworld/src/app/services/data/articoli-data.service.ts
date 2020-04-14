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
}