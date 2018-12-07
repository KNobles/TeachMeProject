import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';
import {Tutor} from '../tutor';
import {Student} from '../student';


@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrls: ['./create-tutor.component.css']
})
export class CreateTutorComponent implements OnInit {
  private _description :string;
  private _year: number ;
  private _section:string;
  @ViewChild('formTutor')
  private _formTutor;
  private _tmpStudent:Student = new Student;
  private _tmpTutor:Tutor = new Tutor;
  private _tutorCreated : EventEmitter<Tutor> = new EventEmitter();

  constructor(public BroadcastTutorForm: BroadcastStudentFormService) { }

  ngOnInit() {
  }

  broadcastForm(form : any) {
    this.BroadcastTutorForm.broadcastStudent({"name": "tutorForm", "valid": form.form.valid});
  }

  Send(form: any) {
    this.broadcastForm(this._formTutor);
    this.tmpTutorCreate();
    this.createTutor();
  }

  tmpTutorCreate():Tutor{
    if(this._formTutor.form.valid){
      this.tmpTutor.username=this.tmpStudent.name;
      this.tmpTutor.password=this.tmpStudent.password;
      this.tmpTutor.mail=this.tmpStudent.mail;
      this.tmpTutor.phone=this.tmpStudent.phone;
      this.tmpTutor.description=this._description;
      this.tmpTutor.year=this._year;
      this.tmpTutor.section=this.section;
      return this.tmpTutor;
    }
    else {
      return;
    }
  }

  createTutor(){
    this._tutorCreated.next(this.tmpTutor);
    this.reset();
  }

  reset() {
    this._tmpTutor = new Tutor;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get section(): string {
    return this._section;
  }

  set section(value: string) {
    this._section = value;
  }

  get formTutor() {
    return this._formTutor;
  }

  set formTutor(value) {
    this._formTutor = value;
  }

  get tmpStudent(): Student {
    return this._tmpStudent;
  }

  @Input()
  set tmpStudent(value: Student) {
    this._tmpStudent= value;
  }

  get tmpTutor(): Tutor {
    return this._tmpTutor;
  }

  @Output()
  get tutorCreated(): EventEmitter<Tutor> {
    return this._tutorCreated;
  }

}
