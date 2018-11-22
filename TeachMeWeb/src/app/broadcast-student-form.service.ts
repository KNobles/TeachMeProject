import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BroadcastStudentFormService {
  private subjectStudentForm: BehaviorSubject <any> = new BehaviorSubject(null);
  public formCreated$: Observable <any> = this.subjectStudentForm.asObservable();
  constructor() { }
  public broadcastStudent(form: any) {
    this.subjectStudentForm.next(form);
  }
}
