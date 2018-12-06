import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {delay} from "rxjs/operators";
import {Tutor} from '../user/tutor';
import {Student} from "../user/student";
import {StudentService} from "../user/student.service";
import {TutorService} from "../user/tutor.service";
import {Subscription} from "rxjs";
import {Router} from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private _login: string ;
  private _password: string ;
  private _subGet: Subscription;
  private _subUpdate: Subscription;
  private _tmpStudent: Student;
  private _tmpTutor: Tutor;
  private _token: string;
  private _isStudent: boolean = true;

  constructor(public authService: AuthService, public studentService: StudentService, public tutorService: TutorService, public router: Router) {}
  ngOnInit() {
  }

  ngOnDestroy(){
    if(this._subGet){
      this._subGet.unsubscribe();
    }
    if(this._subUpdate) {
      this._subUpdate.unsubscribe();
    }
  }

  connection() {
    //alert(this._login + ' ' + this._password);
    this.authService.login(this._login, this._password).subscribe(
      token => {
        this._token = token;
        console.log(this._token);
        if(this._isStudent)
        {
          this._subGet = this.studentService.getAccount(this.login, this.password).subscribe(student => {
            this.tmpStudent = new Student().deserializable(student);
            this.tmpStudent.token = this._token;
            this._subUpdate = this.studentService.update(this.tmpStudent).subscribe();
            localStorage.setItem("account", JSON.stringify(this.tmpStudent));
            localStorage.setItem("type", "student");
            this.router.navigate(['/Home']);
          });

        }
        else
        {
          this._subGet = this.tutorService.getAccount(this.login, this.password).subscribe(tutor => {
            this.tmpTutor = new Tutor().deserializable(tutor);
            this.tmpTutor.token = this._token;
            this._subUpdate = this.tutorService.update(this.tmpTutor).subscribe();
            localStorage.setItem("account", JSON.stringify(this.tmpTutor.toJson()));
            console.log(localStorage.getItem("account"));
            localStorage.setItem("type", "tutor");
            this.router.navigate(['/Home']);
          });

        }
      });






  }

  onChange(){
    this._isStudent = ! this._isStudent;
  }

  get tmpStudent(): Student {
    return this._tmpStudent;
  }

  set tmpStudent(value: Student) {
    this._tmpStudent = value;
  }

  get tmpTutor(): Tutor {
    return this._tmpTutor;
  }

  set tmpTutor(value: Tutor) {
    this._tmpTutor = value;
  }


  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
