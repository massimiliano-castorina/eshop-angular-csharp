import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthService } from '../services/auth/basicauth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { UsersDataService } from '../services/data/users-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId = '';
  passwordId = '';
  autentification: boolean;
  access: boolean = true;
  errorMessage = 'Spiacente, la username e la password sono errati';
  successMessage = 'Benvenuto, siamo felici di rivederti nel nostro portale!';
  auth: boolean;
  user = [];
  user2 = [];
  count: number;
  auth2: string;

  constructor(private route: Router, private users: UsersDataService) {}
  ngOnInit(): void {
    if (sessionStorage.getItem("utente") != null) {
      this.access = false;
      this.route.navigate(['welcome']);
    }
    console.log(sessionStorage.getItem("utente"));
    console.log(this.access);
    this.listUser();
  }

  listUser = () => {
      //console.log(this.users.listUsers());
      this.users.listUsers().subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error),
      );
      //this.user2.push(this.users.listUsers());
  }

  handleResponse(response)  {
    const jsonLength = response.length;
    for (let i = 0; i < jsonLength; i++) {
      if (response[i].id !== 0) {
        this.user.push(response[i]);
      }
    }
  }

  handleError(error) {
    this.user = error.error.text;
  }
  loginAccess() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if ((this.userId.toLowerCase() === this.user[i].username.toLowerCase() ||
          this.userId.toLowerCase() === this.user[i].email.toLowerCase()) &&
          this.passwordId === this.user[i].password
          ) {
            this.auth2 = 'true';
            sessionStorage.setItem("utente", this.userId);
            sessionStorage.setItem("auth", this.auth2);
            console.log("sono dentro l'if");
            this.access = false;
            this.autentification = false;
            this.route.navigate(['welcome']);
            location.reload();
      } else {
        this.autentification = true;
      }
    }
  }
}
