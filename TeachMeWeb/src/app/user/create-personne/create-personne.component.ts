import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';


// @ts-ignore
@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit, AfterViewInit {
    private _userName: string;
    private _password: string;
    private _mail: string;
    private _telNumber: string;
   @ViewChild('formStudent')
   private _formStudent;

  get formStudent() {
    return this._formStudent;
  }

  constructor(public BroadcastStudentForm: BroadcastStudentFormService) { }

  ngAfterViewInit(): void {
    //this.broadcastForm(this._formStudent);
  }
  ngOnInit() {
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
  broadcastForm(form : any) {
    this.BroadcastStudentForm.broadcastStudent({"name": "personneForm", "valid": form.form.valid});
  }
  Send(form: any) {
    if(this.formStudent.form.valid) {
      this.broadcastForm(this._formStudent);
    }
    else return;
  }
}
