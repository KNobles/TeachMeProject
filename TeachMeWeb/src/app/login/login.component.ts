import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login: string ;
  private _password: string ;
  constructor(public authService: AuthService) {}
  ngOnInit() {
  }
  Connection() {
    //alert(this._login + ' ' + this._password);
    this.authService.login(this._login, this._password).subscribe(
      () => {
        console.log("user is logged in");
      });
    console.log("connection");
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
