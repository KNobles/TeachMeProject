import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Student} from "../student";
import {CreatePersonneComponent} from '../create-personne/create-personne.component';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private _studentTmp: Student = new Student;
  private _studentCreated: EventEmitter<Student> = new EventEmitter();
  private _isHidden: boolean = false;
  public formvalidation : any = {} ;


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

  get studentTmp(): Student {
    return this._studentTmp;
  }

  createStudent() {
    this._studentCreated.next(this._studentTmp);
  }

  reset() {
    this._studentTmp = new Student;
  }

  @Output()
  getUserCreated(): EventEmitter<Student> {
    return this._studentCreated;
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
}
