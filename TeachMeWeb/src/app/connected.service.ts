import { Injectable } from '@angular/core';
import {Student} from "./user/student";
import {Tutor} from "./user/tutor";

@Injectable({
  providedIn: 'root'
})
export class ConnectedService {

  private _connected: boolean = false;
  private _accountConnected : Tutor | Student;

  constructor() { }


  get connected(): boolean {
    return this._connected;
  }

  public disconnected(): boolean{
    return !this.connected;
  }

  public connecting(){

    let accountTmp : string = localStorage.getItem("account");

    if(accountTmp != null){

      if(localStorage.getItem("type") === "student"){
        this._accountConnected = new Student().deserializable(JSON.parse(accountTmp));
      }
      else{
        this._accountConnected = new Tutor().deserializable(JSON.parse(accountTmp));
      }


      this._connected = true;

    }

  }

  public disconnecting(){

    if(this.connected){

      this._connected = false;
      this._accountConnected = null;
      localStorage.removeItem("account");
      localStorage.removeItem("type");

    }

  }


  get accountConnected(): Student | Tutor {

    if(this.connected){

      return this._accountConnected;

    }

    return null;

  }
}
