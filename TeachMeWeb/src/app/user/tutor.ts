import {Course} from "../course/course";

export class Tutor {
  private _idTutor: number;
  private _username: string;
  private _password: string;
  private _mail: string;
  private _tel: string;
  private _evaluation: number;
  private _description: string;
  private _isWarned: boolean;
  private _isModerator: boolean;
  private _year:number;
  private _section:string;



  constructor(username: string="tutor", password: string="password", mail: string="tutor@hotmail.com",
              tel: string="0123456789", evaluation: number=0, description: string="", isWarned: boolean=false, isModerator: boolean=false
  ,year: number = 1,section:string="undifined") {
    this._username = username;
    this._password = password;
    this._mail = mail;
    this._tel = tel;
    this._evaluation = evaluation;
    this._description = description;
    this._isWarned = isWarned;
    this._isModerator = isModerator;
    this._year=year;
    this._section=section;
  }


  get year(): number {
    return this._year;
  }

  get section(): string {
    return this._section;
  }

  get idTutor(): number {
    return this._idTutor;
  }

  set idTutor(value: number) {
    this._idTutor = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
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

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get evaluation(): number {
    return this._evaluation;
  }

  set evaluation(value: number) {
    this._evaluation = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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

  set year(value: number) {
    this._year = value;
  }

  set section(value: string) {
    this._section = value;
  }

  public deserializable(json: any) : Tutor {
    Object.assign(this, json);
    return this;
  }

  public serialize() : any {
    return {
     // idTutor: this._idTutor,
      username: this._username,
      password: this._password,
      mail: this._mail,
      phone: this._tel,
    //  evaluation: this._evaluation,
      description: this._description
   /*   isWarned: this._isWarned,
      isModerator: this._isModerator,
      year: this._year,
      section:this._section*/
    };
  }
}
