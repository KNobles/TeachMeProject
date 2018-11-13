import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {
    private _userName: string;
    private _password: string;
    private _mail: string;
    private _telNumber: string;

  constructor() { }

  ngOnInit() {
  }
  Test() {
    alert(this._userName + ' ' + this._password + ' ' + this._mail + ' ' + this._telNumber);
  }
  get userName(): string {
    return this._userName;
  }
  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get telNumber(): string {
    return this._telNumber;
  }

  set telNumber(value: string) {
    this._telNumber = value;
  }
}
