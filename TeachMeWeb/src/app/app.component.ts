import { Component } from '@angular/core';
import {Student} from './user/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeachMe';
  private _tmpStudent = Student;

  receiveStudent(student:Student){
  //  this._tmpStudent=student;
  }
}

