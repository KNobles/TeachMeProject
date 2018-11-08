import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Eleve} from "./eleve";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  public static readonly URL_API_ELEVE = '/api/user';

  constructor(public http:HttpClient) { }

  public query() : Observable<Eleve[]> {
    return this.http.get<Eleve[]>(EleveService.URL_API_ELEVE);
  }

  public create(eleve: Eleve) : Observable<Eleve> {
    return this.http.post<Eleve>(EleveService.URL_API_ELEVE, eleve.serialize());
  }

  public delete(eleve: Eleve) : Observable<any>{
    return this.http.delete<any>(EleveService.URL_API_ELEVE + '/' + eleve.id);
  }

  public update(eleve: Eleve) : Observable<any>{
    return this.http.put<any>(EleveService.URL_API_ELEVE, eleve.serialize());
  }

}
