import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly URL = "/api/login";

  constructor(public http: HttpClient) { }

  public login(username: string, password: string) : Observable<string>{
    return this.http.post<string>(AuthService.URL, {username, password});
  }
}
