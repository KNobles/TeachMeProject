import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tutor} from '../user/tutor';
import {TutorService} from '../user/tutor.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  private _tmpTutor:Tutor=new Tutor;
  private _subGet : Subscription;
  private _subUpdate : Subscription;/*
  private _username: string;
  private _password: string;
  private _mail: string;
  private _tel: string;
  private _evaluation: number;
  private _description: string;
  private _isWarned: boolean;
  private _year:number;
  private _section:string;*/
  private _modify:boolean=true;

  constructor(public tutor :TutorService) { }

  ngOnInit() {
    this.getTutor(2);
  }
  get tmpTutor(): Tutor {
    return this._tmpTutor;
  }
  set tmpTutor(value: Tutor) {
    this._tmpTutor = value;
  }
  getTutor(id : number) {
   this._subGet = this.tutor.get(id).subscribe(tutor => this.tmpTutor = new Tutor().deserializable(tutor));
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

  get tel(): string {
    return this.tmpTutor.phone;
  }

  set tel(value: string) {
    this.tmpTutor.phone = value;
  }

  get evaluation(): number {
    return this.tmpTutor.evaluation;
  }

  set evaluation(value: number) {
    this.tmpTutor.evaluation = value;
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
  get modify(): boolean {
    return this._modify;
  }
  Sending(){
    this._subUpdate=this.tutor.update(this.tmpTutor).subscribe()
    alert("Modification done");

  }

}
