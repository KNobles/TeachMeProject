import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Announcement} from "./Announcement";
import {AnnouncementService} from "../announcement.service";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})

export class CreateAnnouncementComponent implements OnInit {

  private _announcementTmp: Announcement = new Announcement;
  private _announcementCreated:EventEmitter<Announcement> = new EventEmitter();

  constructor(public announcementService: AnnouncementService   ) { }

  ngOnInit() {
  }

  sendAnnouncement(announcement: Announcement) {
    this.announcementService.create(announcement);
  }


  get announcementTmp(): Announcement {
    return this._announcementTmp;
  }

  createAnnouncement(){
    this._announcementCreated.next(this.announcementTmp);
    console.log(this._announcementTmp);
    this.reset();
  }

  reset(){
    this._announcementTmp = new Announcement;
  }

  @Output()
  get announcementCreated():EventEmitter<Announcement>{
    return this._announcementCreated;
  }







}
