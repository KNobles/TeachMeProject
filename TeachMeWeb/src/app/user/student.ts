import {Output} from '@angular/core';

export class Student {

  private _idStudent: number;
  private _name:string;
  private _mail:string;
  private _phone:string;
  private _password:string;
  private _avertissement: boolean;
  private _isModerateur: boolean;
  private _token: string;

  constructor(name: string="user", mail: string="user@hotmail.com", password: string="password", tel: string="0123456789", isWarned:boolean=false, isModerator:boolean=false) {
    this._name = name;
    this._mail = mail;
    this._password = password;
    this._phone = tel;
    this._avertissement = isWarned;
    this._isModerateur = isModerator;
  }

  get idStudent(): number {
    return this._idStudent;
  }

  set idStudent(value: number) {
    this._idStudent = value;
  }
  @Output()
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get avertissement(): boolean {
    return this._avertissement;
  }

  set avertissement(value: boolean) {
    this._avertissement = value;
  }

  get isModerateur(): boolean {
    return this._isModerateur;
  }

  set isModerateur(value: boolean) {
    this._isModerateur = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  public deserializable(json: any) : Student {
    Object.assign(this, json);
    return this;
  }

  public serialize() : any {
    return {
      name: this._name,
      mail: this._mail,
      tel: this._phone,
      password: this._password,
    };
  }

  public serializeUpdate(): any {
    return {
      idEleve: this._idStudent,
      name: this._name,
      password: this._password,
      mail: this._mail,
      tel: this._phone,

      token: this._token
      /*   isWarned: this._isWarned,
         isModerator: this._isModerator,
         year: this._year,
         section:this._section*/
    };
  }

  toJson() {
    return {
      idEleve: this._idStudent,
      name: this._name,
      password: this._password,
      mail: this._mail,
      tel: this._phone,
      avertissement: this._avertissement,
      isModerateur: this._isModerateur,
      token: this._token

    }
  }
}
