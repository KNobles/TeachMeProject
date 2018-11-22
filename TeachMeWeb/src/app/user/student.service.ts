import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public static readonly URL_API_STUDENT = '/api/user';

  constructor(public http:HttpClient) { }

  public query() : Observable<Student[]> {
    return this.http.get<Student[]>(StudentService.URL_API_STUDENT);
  }

  public create(student: Student) : Observable<Student> {
    return this.http.post<Student>(StudentService.URL_API_STUDENT, student.serialize());
  }

  public delete(student: Student) : Observable<any>{
    return this.http.delete<any>(StudentService.URL_API_STUDENT + '/' + student.idStudent);
  }

  public update(student: Student) : Observable<any>{
    return this.http.put<any>(StudentService.URL_API_STUDENT, student.serialize());
  }

}