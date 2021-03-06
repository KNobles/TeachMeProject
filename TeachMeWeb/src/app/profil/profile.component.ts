import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tutor} from '../user/tutor';
import {TutorService} from '../user/tutor.service';
import {Subscription} from 'rxjs';
import {ConnectedService} from "../connected.service";


@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  private _tmpTutor:Tutor=new Tutor;
  private _subGet : Subscription;
  private _subUpdate : Subscription;
  private _modify:boolean=true;
  private _stars: number[] = [];

  constructor(public tutor :TutorService, public connectedService: ConnectedService) { }

  ngOnInit() {
    if(localStorage.getItem("type" ) === "tutor")
    {
      this.getTutor();
      this.setRatingStars();
      console.log(this.tmpTutor);
    }

  }

  ngOnDestroy():void{
    if(this._subGet) {
      this._subGet.unsubscribe();
    }
    if(this._subUpdate) {
      this._subUpdate.unsubscribe();
    }
  }

  Modification(){
    if(this._modify){
      this._modify=false;
    }
    else{
      this._modify=true;
    }

  }

  Sending(){
    console.log(this.tmpTutor);
    this._subUpdate=this.tutor.update(this.tmpTutor).subscribe()
    localStorage.setItem("account", JSON.stringify(this.tmpTutor.toJson()));
    alert("Modification done");
  }

  setRatingStars(){
    for(var i = 0; i < this.connectedService.tutorConnected.evaluation; i++){
      this.stars[i] = i;
    }
  }
  getTutor() {
    this.connectedService.connecting();
    this.tmpTutor = this.connectedService.tutorConnected;/*
    let id: number = this.tmpTutor.idTutor;
    this._subGet = this.tutor.get(id).subscribe(tutor => this.tmpTutor = new Tutor().deserializable(tutor));*/
  }

  get tmpTutor(): Tutor {
    return this._tmpTutor;
  }
  set tmpTutor(value: Tutor) {
    this._tmpTutor = value;
  }

  get username(): string {
    return this.tmpTutor.username;
  }

  set username(value: string) {
    this.tmpTutor.username = value;
  }

  get password(): string {
    return this.tmpTutor.password;
  }

  set password(value: string) {
    this.tmpTutor.password = value;
  }

  get mail(): string {
    return this.tmpTutor.mail;
  }

  set mail(value: string) {
    this.tmpTutor.mail = value;
  }

  get phone(): string {
    return this.tmpTutor.phone;
  }

  set phone(value: string) {
    this.tmpTutor.phone = value;
  }

  get evaluation(): number {
    return this.tmpTutor.evaluation;
  }


  get description(): string {
    return this.tmpTutor.description;
  }

  set description(value: string) {
    this.tmpTutor.description = value;
  }

  get isWarned(): boolean {
    return this.tmpTutor.isWarned;
  }

  set isWarned(value: boolean) {
    this.tmpTutor.isWarned = value;
  }

  get year(): number {
    return this.tmpTutor.year;
  }

  set year(value: number) {
    this.tmpTutor.year = value;
  }

  get section(): string {
    return this.tmpTutor.section;
  }

  set section(value: string) {
    this.tmpTutor.section = value;
  }


  get modify(): boolean {
    return this._modify;
  }

  get stars(): number[] {
    return this._stars;
  }

  set stars(value: number[]) {
    this._stars = value;
  }

}
