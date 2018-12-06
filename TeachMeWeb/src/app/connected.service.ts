import { Injectable } from '@angular/core';
import {Student} from "./user/student";
import {Tutor} from "./user/tutor";

@Injectable({
  providedIn: 'root'
})
export class ConnectedService {



  private _connected: boolean = false;
  private _tutorConnected : Tutor;
  private _studentConnected : Student;
  private _accountConnected: Tutor | Student;

  constructor() {
  }


  get connected(): boolean {
    return this._connected;
  }

  public disconnected(): boolean{
    return !this.connected;
  }

  public connecting(){

    let accountTmp : string = localStorage.getItem("account");

    if(accountTmp != null){
      if(localStorage.getItem("type") === "student")
      {
        this._studentConnected =  new Student().deserializable(localStorage.getItem("account"));
        this.accountConnected = this.studentConnected;
      }
      else{

        let tutor: Tutor;
        this._tutorConnected = new Tutor().deserializable(JSON.parse(localStorage.getItem("account")));
        this.accountConnected = this.tutorConnected;
      }



      this._connected = true;

    }

  }

  public disconnecting(){

    if(this.connected){

      this._connected = false;
      this._studentConnected = null;
      this._tutorConnected = null;
      localStorage.removeItem("account");
      localStorage.removeItem("type");

    }

  }

  get studentConnected(): Student {
    return this._studentConnected;
  }

  set studentConnected(value: Student) {
    this._studentConnected = value;
  }
  get tutorConnected(): Tutor {
    return this._tutorConnected;
  }

  set tutorConnected(value: Tutor) {
    this._tutorConnected = value;
  }

  get accountConnected(): Tutor | Student {
    return this._accountConnected;
  }

  set accountConnected(value: Tutor | Student) {
    this._accountConnected = value;
  }

}
