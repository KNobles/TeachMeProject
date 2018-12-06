import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutor} from "./tutor";

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  public static readonly URL_API_TUTOR = '/api/tutor';

  constructor(public http: HttpClient) {
  }

  public query(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(TutorService.URL_API_TUTOR);
  }

  public get(id : number): Observable<Tutor> {
    return this.http.get<Tutor>(TutorService.URL_API_TUTOR+"/" + id);
  }

  public getAccount(username : string, password: string): Observable<Tutor>{
    return this.http.get<Tutor>(TutorService.URL_API_TUTOR + "?username=" + username +"&password=" + password);
  }

  public create(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(TutorService.URL_API_TUTOR, tutor.serialize());
  }

  public delete(tutor: Tutor): Observable<any> {
    return this.http.delete<any>(TutorService.URL_API_TUTOR + '/' + tutor.idTutor);
  }

  public update(tutor: Tutor): Observable<any> {
    return this.http.put<any>(TutorService.URL_API_TUTOR, tutor.serializeUpdate());
  }

}
