import { Component, OnInit } from '@angular/core';
import { BasicauthService } from '../services/auth/basicauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  connectUser: string = sessionStorage.getItem("auth");
  nameUser: string = sessionStorage.getItem("utente");

  constructor(private auth: BasicauthService, private router: Router) { }

  ngOnInit(): void {
    console.log("nameUser:" + this.nameUser);
  }

  logOut() {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("utente");
    this.connectUser = sessionStorage.getItem("auth");
    console.log('logOut '.concat(sessionStorage.getItem("auth")));
    console.log('logOut '.concat(this.connectUser));
    this.router.navigate(['index']);
  }

  logIn() {
  }

  sessionControl() {
    if(this.connectUser !== null) {
      this.connectUser = sessionStorage.getItem("auth");
      return true;
    } else {
      this.connectUser = sessionStorage.getItem("auth");
      return false;
    }
  }
}
