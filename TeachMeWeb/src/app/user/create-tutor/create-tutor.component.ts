import {Component, OnInit, ViewChild} from '@angular/core';
import {BroadcastStudentFormService} from '../../broadcast-student-form.service';

@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrls: ['./create-tutor.component.css']
})
export class CreateTutorComponent implements OnInit {
  private _description :String;
  private _annee: String;
  private _section:String;
  @ViewChild('formTutor')
  private _formTutor;

  constructor(public BroadcastTutorForm: BroadcastStudentFormService) { }

  ngOnInit() {
  }
  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }


  get annee(): String {
    return this._annee;
  }

  set annee(value: String) {
    this._annee = value;
  }

  get section(): String {
    return this._section;
  }

  set section(value: String) {
    this._section = value;
  }
  broadcastForm(form : any) {
    this.BroadcastTutorForm.broadcastStudent({"name": "tutorForm", "valid": form.form.valid});
  }
  Send(form: any) {
    if(this.formTutor.form.valid) {
      this.broadcastForm(this._formTutor);
    }
    else return;
  }
  get formTutor() {
    return this._formTutor;
  }

  set formTutor(value) {
    this._formTutor = value;
  }
}
