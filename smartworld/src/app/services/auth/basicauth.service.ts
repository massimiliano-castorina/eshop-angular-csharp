import { Injectable } from '@angular/core';
import { UsersDataService } from '../data/users-data.service';

@Injectable({
  providedIn: 'root'
})
export class BasicauthService {
  auth: string;
  users = [];

  constructor(private usersList: UsersDataService) { }

  // Autentifica(userId, password) {
  //   if (userId.toLowerCase() === "massimiliano" && password.toLowerCase() === "123") {
  //     this.auth = 'true';
  //     sessionStorage.setItem("utente", userId);
  //     sessionStorage.setItem("auth", this.auth);
  //     return true;
  //   } else {
  //     this.auth = 'false';
  //     sessionStorage.setItem("auth", this.auth);
  //     return false;
  //   }
  // }

  // UserList() {
  //   this.usersList.listUsers().subscribe(
  //     response => this.handleResponse(response),
  //     error => this.handleError(error)
  //   );
  // }

  handleResponse(response) {
    const jsonLength = response.length;
    for (let i = 0; i < jsonLength; i++) {
      if (response[i].id !== 0) {
        this.users.push(response[i]);
        //console.log(response[i]);
      }
    }
    return this.users;
  }

  handleError(error){
    this.usersList = error.error.text;
  }



  isLogged() {
    if (sessionStorage.getItem("utente")) {
      return true;
    } else {
      return false;
    }
  }

}
