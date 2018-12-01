import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Announcement} from "./announcement/announcement";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BroadcastCreateAnnouncementService {

  private subjectAnnouncementCreated: BehaviorSubject<Announcement> = new BehaviorSubject(null);
  public  AnnouncementCreated:Observable<Announcement> = this.subjectAnnouncementCreated.asObservable().pipe(filter(announcement => !!announcement));

  constructor() { }

  public broadcastAnnouncement(announcement: Announcement){
    this.subjectAnnouncementCreated.next(announcement);
  }
}
