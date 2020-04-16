import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/data/users-data.service';
import { kStringMaxLength } from 'buffer';
import { stringify } from 'querystring';
import { empty } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name = '';
  surname = '';
  email = '';
  username = '';
  password = '';
  passwordRpt = '';
  registrazione: {};
  errorMessageControll = true;

  constructor(private users: UsersDataService) { }

  ngOnInit(): void {
  }

  insertUser() {
    this.errorMessageControll = false;
    //console.log(this.emailControll());
    this.registrazione = {
      nome: this.name.toLowerCase(),
      cognome: this.surname.toLowerCase(),
      email: this.email.toLowerCase(),
      username: this.username,
      password: this.password
    };
    if (this.registerControll() && this.emailControll() && this.passwordRptControll()) {
      this.users.insertUser(this.registrazione).subscribe();
      this.errorMessageControll = true;
    }
  }

  registerControll() {
    if (this.passwordControll() && this.name !== '' &&
      this.surname !== '' && this.username !== '' && this.password !== '' &&
      this.email !== '') {
      return true;
    } else {
      return false;
    }
  }

  passwordControll() {
    const formatSpecialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (this.password.match(formatSpecialCharacter) && this.password.length >= 8 &&
    this.password.match(/\d+/g) && this.password.match(/[A-Z]/)) {
      return true;
    } else {
      return false;
    }
  }

  passwordRptControll() {
    if (this.password === this.passwordRpt) {
      return true;
    } else {
      return false;
    }
  }

  emailControll() {
    const controlEmail1 = /[@]/;
    const controlEmail2 = /[.]/;
    const firstControl = this.email.substring(1, this.email.length).match(controlEmail1);
    const searchFirstControl = this.email.indexOf("@");
    const secondControl = this.email.substring(searchFirstControl, this.email.length).match(controlEmail2);
    const thirdControl = this.email.substring(searchFirstControl + 1, searchFirstControl + 2).match(controlEmail2);
    const fourthControl = this.email.substring(searchFirstControl - 1, searchFirstControl).match(controlEmail2);
    //console.log("terzo controllo" + thirdControl);
    if (firstControl && secondControl && !thirdControl && !fourthControl) {
      return true;
    } else {
      return false;
    }
  }
}

