import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AnnouncementService} from "../announcement/announcement.service";
import {BroadcastCreateAnnouncementService} from "../broadcast-create-announcement.service";
import {Announcement} from "../announcement/announcement";
import {FilterByPriceAnnouncementPipe} from "../filter-by-price-announcement.pipe";
import {Tutor} from "../user/tutor";
import {TutorService} from "../user/tutor.service";


@Component({
  selector: 'app-list-announcement',
  templateUrl: './list-announcement.component.html',
  styleUrls: ['./list-announcement.component.css']
})
export class ListAnnouncementComponent implements OnInit, OnDestroy {
  private _announcements: Announcement[] = [];
   _tutor: Tutor;

  private subDelete: Subscription;
  private subUpdate: Subscription;
  private subQuery: Subscription;
  private subBroadcast: Subscription;


  private _OPTIONS = [FilterByPriceAnnouncementPipe.ORDER_DEFAULT, FilterByPriceAnnouncementPipe.ORDER_ASCENDING, FilterByPriceAnnouncementPipe.ORDER_DESCENDING];
  optionSelected: number = FilterByPriceAnnouncementPipe.ORDER_DEFAULT;

  constructor(public tutorService: TutorService, public announcementService: AnnouncementService, public broadcastCreateAnnouncement: BroadcastCreateAnnouncementService) {
  }

  receiveAnnouncement(announcement: Announcement) {
    this._announcements.push(announcement);
  }

  intToOrderOption(num: number) {
    return FilterByPriceAnnouncementPipe.intToOrderOption(num);
  }

  listAnnouncementCreated() {
    this.subBroadcast = this.broadcastCreateAnnouncement.AnnouncementCreated.subscribe(announcementFromServer => this._announcements.push(announcementFromServer));
  }

  ngOnInit() {
    this.listAnnouncementCreated();
    this.getAnnouncements();
  }

  ngOnDestroy(): void {
    if (this.subDelete) {
      this.subDelete.unsubscribe();
    }

    if (this.subUpdate) {
      this.subUpdate.unsubscribe();
    }

    if (this.subQuery) {
      this.subQuery.unsubscribe();
    }

    if (this.subBroadcast) {
      this.subBroadcast.unsubscribe();
    }
  }

  deleteAnnouncement(announcement: Announcement) {
    this.subDelete = this.announcementService.delete(announcement).subscribe();
  }

  updateAnnouncement(announcement: Announcement) {
    this.subUpdate = this.announcementService.update(announcement).subscribe();
  }

  getAnnouncements() {
    this.subQuery = this.announcementService
      .query()
      .subscribe(announcements => this._announcements = announcements.map(a => new Announcement().deserializable(a)));
  }

  set announcements(value: Announcement[]) {
    this._announcements = value;
  }

  get announcements(): Announcement[] {
    return this._announcements;
  }

  get OPTIONS(): number[] {
    return this._OPTIONS;
  }

  set OPTIONS(value: number[]) {
    this._OPTIONS = value;
  }

  get tutor(): Tutor {
    return this._tutor
  }

  tutorById(id: number): Tutor {
    this.tutorService.get(id).subscribe(t => this._tutor = new Tutor().deserializable(t));
    return this._tutor;
  }
}


