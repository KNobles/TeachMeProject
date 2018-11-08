export class Eleve {
  private _id: number;
  private _name:string;
  private _mail:string;
  private _tel:string;
  private _password:string;
  private _isWarned: boolean;
  private _isModerator: boolean

  constructor(name: string="user", mail: string="user@hotmail.com", password: string="password", tel: string="0123456789", isWarned:boolean=false, isModerator:boolean=false) {
    this._name = name;
    this._mail = mail;
    this._password = password;
    this._tel = tel;
    this._isWarned = isWarned;
    this._isModerator = isModerator;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

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

  public deserializable(json: any) : Eleve {
    //OBJECT ASSIGN
    return this;
  }

  public serialize() : any {
    return {
      id: this._id,
      name: this._name,
      mail: this._mail,
      tel: this._tel,
      password: this._password,
      isWarned: this._isWarned,
      isModerator: this._isModerator
    };
  }

}
