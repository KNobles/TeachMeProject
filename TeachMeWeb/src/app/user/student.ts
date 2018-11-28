import {Output} from '@angular/core';

export class Student {
  private _idStudent: number;
  private _username:string;
  private _mail:string;
  private _tel:string;
  private _password:string;
  private _isWarned: boolean;
  private _isModerator: boolean

  constructor(name: string="user", mail: string="user@hotmail.com", password: string="password", tel: string="0123456789", isWarned:boolean=false, isModerator:boolean=false) {
    this._username = name;
    this._mail = mail;
    this._password = password;
    this._tel = tel;
    this._isWarned = isWarned;
    this._isModerator = isModerator;
  }

  get idStudent(): number {
    return this._idStudent;
  }

  set idStudent(value: number) {
    this._idStudent = value;
  }
  @Output()
  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get isWarned(): boolean {
    return this._isWarned;
  }

  set isWarned(value: boolean) {
    this._isWarned = value;
  }

  get isModerator(): boolean {
    return this._isModerator;
  }

  set isModerator(value: boolean) {
    this._isModerator = value;
  }

  public deserializable(json: any) : Student {
    Object.assign(this, json);
    return this;
  }

  public serialize() : any {
    return {
      idStudent: this._idStudent,
      username: this._username,
      mail: this._mail,
      tel: this._tel,
      password: this._password,
      isWarned: this._isWarned,
      isModerator: this._isModerator
    };
  }

}
