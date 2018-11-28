import {AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';
import {Student} from '../student';


// @ts-ignore
@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit, AfterViewChecked{
    private _userName: string;
    private _password: string;
    private _mail: string;
    private _telNumber: string;
    private _tmpStudent = new Student;
   @ViewChild('formStudent')
    private _formStudent;
    private _studentCreated : EventEmitter<Student> = new EventEmitter();

  get formStudent() {
    return this._formStudent;
  }

  constructor(public BroadcastStudentForm: BroadcastStudentFormService) { }

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

      this.broadcastForm(this._formStudent);
      this.tmpStudentCreate();
      this.createStudent();

  }


  get tmpStudent(): Student {
    return this._tmpStudent;
  }
  tmpStudentCreate():Student{
    if(this._formStudent.form.valid){
      this.tmpStudent.username=this._userName  ;
      this.tmpStudent.password=this._password  ;
      this.tmpStudent.mail=this._mail;
      this.tmpStudent.tel=this._telNumber;
      console.log(this.tmpStudent);
      return this.tmpStudent;
    }
    else{
      return ;
    }

  }

  createStudent() {
    this._studentCreated.next(this.tmpStudent);
    this.reset();
  }

  reset() {
    this._tmpStudent = new Student;
  }

  @Output()
  get studentCreated(): EventEmitter<Student> {
    return this._studentCreated;
  }


  ngAfterViewChecked(): void {
    this.broadcastForm(this._formStudent);
  }
}
