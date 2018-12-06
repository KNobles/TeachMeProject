import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from "../announcement/announcement.service";
import {BroadcastCreateAnnouncementService} from "../broadcast-create-announcement.service";
import {Announcement} from "../announcement/announcement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-smart-create-announcement',
  templateUrl: './smart-create-announcement.component.html',
  styleUrls: ['./smart-create-announcement.component.css']
})
export class SmartCreateAnnouncementComponent implements OnInit {

  constructor(public announcementService: AnnouncementService, public broadCastAnnouncementCreated: BroadcastCreateAnnouncementService, public router: Router) { }

  ngOnInit() {
  }

  sendAnnouncement(announcement: Announcement){
    this.announcementService.create(announcement).subscribe(announcement => this.broadCastAnnouncement(announcement));
    this.router.navigate(['/Home']);
  }

  broadCastAnnouncement(announcement: Announcement){
    this.broadCastAnnouncementCreated.broadcastAnnouncement(announcement);
  }

}
