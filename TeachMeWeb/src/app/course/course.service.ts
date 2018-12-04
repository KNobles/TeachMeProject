import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public static readonly URL_API_COURSE = '/api/course';

  constructor(public http: HttpClient) {
  }

  public query(): Observable<Course[]> {
    return this.http.get<Course[]>(CourseService.URL_API_COURSE);
  }

  public get(id : number): Observable<Course> {
    return this.http.get<Course>(CourseService.URL_API_COURSE+"/" + id);
  }

  public create(course: Course): Observable<Course> {
    return this.http.post<Course>(CourseService.URL_API_COURSE, course.serialize());
  }

  public delete(course: Course): Observable<any> {
    return this.http.delete<any>(CourseService.URL_API_COURSE + '/' + course.idCourse);
  }

  public update(course: Course): Observable<any> {
    return this.http.put<any>(CourseService.URL_API_COURSE, course.serialize());
  }
}
