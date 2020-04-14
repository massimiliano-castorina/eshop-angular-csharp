import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthService } from '../services/auth/basicauth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  siteTitle = 'Benvenuti nel mio shop';
  subTitle = 'Seleziona gli articoli da acquistare';
  auth: boolean = false;

  constructor(private route: Router, private Basicauth: BasicauthService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth') === 'true') {
      this.auth = true;
      const navbar = new NavbarComponent(this.Basicauth, this.route);
      navbar.logIn();
    } else {
      this.auth = false;
      this.route.navigate(['login']);
    }
  }

}
