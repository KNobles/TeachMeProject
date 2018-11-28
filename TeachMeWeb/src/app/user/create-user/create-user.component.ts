import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Student} from "../student";
import {CreatePersonneComponent} from '../create-personne/create-personne.component';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';
import {Tutor} from '../tutor';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private _isHidden: boolean = false;
  public formvalidation : any = {} ;
  private _tmpStudent : Student;
  private _tmpTutor : Tutor;

  constructor(public BroadcastStudentForm: BroadcastStudentFormService) { }

  ngOnInit() {
  this.InitFormStudent();
  }
  TypeFormulaire () {
    this._isHidden = ! this._isHidden;
  }

  get isHidden(): boolean {
    return this._isHidden;
  }
  InitFormStudent() {
    this.BroadcastStudentForm.formCreated$.subscribe(form => this.saveForm(form));

  }
  saveForm(form:any){
    if (!form)return;
    setTimeout(() => this.formvalidation[form.name] = form.valid, 0);
  }
  formValid(){
    for(let name in this.formvalidation){
      if(!this.formvalidation[name]){
        return false;
      }
    }
    return true;
  }
  Validation(){
    if(!this.isHidden){
      console.log(this._tmpStudent);
    }
    else{
      console.log(this._tmpTutor);
    }

  }
  receiveStudent(value:Student) {
    this._tmpStudent = value;

  }
  receiveTutor(value:Tutor){
    this._tmpTutor=value;
  }
}
