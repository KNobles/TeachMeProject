import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly URL = "/api/login";

  constructor(public http: HttpClient) { }

  public login(username: string, password: string){
    return this.http.post<any>(AuthService.URL, {username, password});
  }
}
