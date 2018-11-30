import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from '../../node_modules/rxjs';
import { filter } from "rxjs/operators";
import {Student} from "./user/student";

@Injectable({
  providedIn: 'root'
})
export class BroadcastStudentCreatedService {

  private subjectStudentCreated:BehaviorSubject<Student> = new BehaviorSubject(null);
  public todoCreated$ : Observable<Student> = this.subjectStudentCreated.asObservable().pipe(filter(student => !!student));

  constructor() { }

  public broadcastStudent(student:Student){
    this.subjectStudentCreated.next(student);
  }
}
