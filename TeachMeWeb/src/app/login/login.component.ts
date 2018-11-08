import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login: string ;
  private _mdp: string ;
  constructor() {}
  ngOnInit() {
  }
  Connection() {
    alert(this._login + ' ' + this._mdp);
  }
}
