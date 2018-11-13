import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private _studentTmp: Student = new Student;
  private _studentCreated:EventEmitter<Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get eleveTmp(): Student {
    return this._studentTmp;
  }

  createEleve() {
    this._studentCreated.next(this.eleveTmp);
  }

  reset() {
    this._studentTmp = new Student;
  }

  @Output()
  getUserCreated(): EventEmitter<Student> {
    return this._studentCreated;
  }

}
