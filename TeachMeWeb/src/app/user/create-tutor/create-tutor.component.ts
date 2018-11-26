import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  private _tmpStudent:Student;
  private _tmpTutor:Tutor = new Tutor;
  constructor(public BroadcastTutorForm: BroadcastStudentFormService) { }

  ngOnInit() {
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
  broadcastForm(form : any) {
    this.BroadcastTutorForm.broadcastStudent({"name": "tutorForm", "valid": form.form.valid});
  }
  Send(form: any) {
      this.broadcastForm(this._formTutor);
      this.tmpTutorCreate();
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
    this._tmpStudent = value;
  }
  tmpTutorCreate():Tutor{
    if(this._formTutor.form.valid){
      this.tmpTutor.username=this.tmpStudent.username;
      this.tmpTutor.password=this.tmpStudent.password ;
      this.tmpTutor.mail=this.tmpStudent.mail;
      this.tmpTutor.tel=this.tmpStudent.tel;
      this.tmpTutor.description=this._description;
      this.tmpTutor.year=this._year;
      this.tmpTutor.section=this.section;
      return this.tmpTutor;
    }
    else{
      return ;
    }

  }
  get tmpTutor(): Tutor {
    return this._tmpTutor;
  }
}
