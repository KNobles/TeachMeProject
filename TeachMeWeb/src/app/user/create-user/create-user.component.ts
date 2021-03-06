import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from "../student";

import {BroadcastStudentFormService} from '../../broadcast-student-form.service';
import {Tutor} from '../tutor';
import {TutorService} from '../tutor.service';
import {StudentService} from '../student.service';

import {Subscription} from 'rxjs';

import {BroadcastStudentCreatedService} from "../../broadcast-student-created.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})

export class CreateUserComponent implements OnInit ,OnDestroy{
  get tmpStudent(): Student {
    return this._tmpStudent;
  }

  set tmpStudent(value: Student) {
    this._tmpStudent = value;
  }

  private _isHidden: boolean = false;
  public formvalidation : any = {} ;
  private _tmpStudent : Student;
  private _tmpTutor : Tutor;
  private _subBroad:Subscription;
  private _isStudentActive: boolean = true;

  constructor(public BroadcastStudentForm: BroadcastStudentFormService,
              public  tutorService :TutorService,
              public  studentService :StudentService, public broadcastStudentCreated : BroadcastStudentCreatedService, public router: Router) { }

  ngOnInit() {
    this.InitFormStudent();
  }

  ngOnDestroy(): void {
    if( this._subBroad){
      this._subBroad.unsubscribe();
    }
  }

  InitFormStudent() {
    this._subBroad=this.BroadcastStudentForm.formCreated$.subscribe(form => this.saveForm(form));

  }

  saveForm(form:any){
    if (!form)return;
    setTimeout(() => this.formvalidation[form.name] = form.valid, 0);
  }

  switchState(){
    if(this.isStudentActive){
      this.isStudentActive = !this.isStudentActive;
    } else {
      this.isStudentActive = true;
    }
  }

  TypeFormulaire () {
    this._isHidden = ! this._isHidden;
  }

  validation(){
    if(!this.isHidden){
      this.studentService.create(this._tmpStudent).subscribe();

    }
    else{
      this.tutorService.create(this._tmpTutor).subscribe();
    }

    this.router.navigate(['/Login']);

  }

  broadcastStudent(student : Student){
    this.broadcastStudentCreated.broadcastStudent(student);
  }

  receiveStudent(value:Student) {
    this._tmpStudent = value;

  }
  receiveTutor(value:Tutor){
    this._tmpTutor = value;
  }

  get isStudentActive(): boolean {
    return this._isStudentActive;
  }

  set isStudentActive(value: boolean) {
    this._isStudentActive = value;
  }

  get isHidden(): boolean {
    return this._isHidden;
  }

}
