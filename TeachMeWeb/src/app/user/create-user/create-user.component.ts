import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Student} from "../student";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private _studentTmp: Student = new Student;
  private _studentCreated:EventEmitter<Student> = new EventEmitter();

  private _isHidden: boolean;

  constructor() { }

  ngOnInit() {
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

}
