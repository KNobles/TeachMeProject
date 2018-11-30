import {Output} from '@angular/core';

export class Student {
  private _idStudent: number;
  private _name:string;
  private _mail:string;
  private _tel:string;
  private _password:string;
  private _avertissement: boolean;
  private _isModerateur: boolean;

  constructor(name: string="user", mail: string="user@hotmail.com", password: string="password", tel: string="0123456789", isWarned:boolean=false, isModerator:boolean=false) {
    this._name = name;
    this._mail = mail;
    this._password = password;
    this._tel = tel;
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

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
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

  public deserializable(json: any) : Student {
    Object.assign(this, json);
    return this;
  }

  public serialize() : any {
    return {
      idEleve: this._idStudent,
      name: this._name,
      mail: this._mail,
      tel: this._tel,
      password: this._password,
      avertissement: this._avertissement,
      isModerateurr: this._isModerateur
    };
  }

}
