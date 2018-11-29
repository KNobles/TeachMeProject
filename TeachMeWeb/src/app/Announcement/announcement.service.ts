import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Announcement} from "./create-announcement/Announcement";
import {Tutor} from "../user/tutor";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  public static readonly URL_API_ANNOUNCEMENT = '/api/announcement';

  constructor(public http: HttpClient) { }

  public query():Observable<Announcement[]>{
    return this.http.get<Announcement[]>(AnnouncementService.URL_API_ANNOUNCEMENT);
  }

  public create(announcement: Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(AnnouncementService.URL_API_ANNOUNCEMENT, announcement.serialize());
  }

  public delete(announcement: Announcement): Observable<any> {
    return this.http.delete<any>(AnnouncementService.URL_API_ANNOUNCEMENT + '/' + announcement.id);
  }

  public update(announcement: Announcement): Observable<any> {
    return this.http.put<any>(AnnouncementService.URL_API_ANNOUNCEMENT, announcement.serialize());
  }
}
