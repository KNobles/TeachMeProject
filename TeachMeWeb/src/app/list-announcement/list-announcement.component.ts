import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {AnnouncementService} from "../announcement/announcement.service";
import {BroadcastCreateAnnouncementService} from "../broadcast-create-announcement.service";
import {Announcement} from "../announcement/announcement";
import {Tutor} from "../user/tutor";
import {TutorService} from "../user/tutor.service";
import {Course} from "../course/course";
import {CourseService} from "../course/course.service";
import {FilterAnnouncementPipe} from "../filter-announcement.pipe";


@Component({
  selector: 'app-list-announcement',
  templateUrl: './list-announcement.component.html',
  styleUrls: ['./list-announcement.component.css']
})
export class ListAnnouncementComponent implements OnInit, OnDestroy {
  private _announcements: Announcement[] = [];
  private _tutors: Tutor[] = [];
  private _courses: Course[] = [];

  private subDelete: Subscription;
  private subUpdate: Subscription;
  private subQuery: Subscription;
  private subBroadcast: Subscription;

  private _currentCourse: number = -1;

  private _options = [FilterAnnouncementPipe.ORDER_DEFAULT, FilterAnnouncementPipe.ORDER_ASCENDING, FilterAnnouncementPipe.ORDER_DESCENDING];
  optionSelected: number = FilterAnnouncementPipe.ORDER_DEFAULT;

  constructor(public courseService: CourseService, public tutorService: TutorService, public announcementService: AnnouncementService) {
  }

  get currentCourse(): number {
    return this._currentCourse;
  }

  receiveAnnouncement(announcement: Announcement) {
    this._announcements.push(announcement);
  }

  intToOrderOption(num: number) {
    return FilterAnnouncementPipe.intToOrderOption(num);
  }
/*
  listAnnouncementCreated() {
    this.subBroadcast = this.broadcastCreateAnnouncement.AnnouncementCreated$.subscribe(announcementFromServer => this._announcements.push(announcementFromServer));
  }
*/
  ngOnInit() {
   // this.listAnnouncementCreated();
    this.getAnnouncements();
    this.getTutors();
    this.getCourses();
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

  get options(): number[] {
    return this._options;
  }

  set options(value: number[]) {
    this._options = value;
  }

  getTutors(): void {
    this.tutorService.query().subscribe(t => this._tutors = t.map(tutor => new Tutor().deserializable(tutor)));
  }

  get tutors(): Tutor[] {
    return this._tutors;
  }

  getTutorById(id: number): Tutor{
    for(let t of this.tutors){
      if(t.idTutor == id){
        return t;
      }
    }
  }

  getCourses(): void {
    this.courseService.query().subscribe(c => this._courses = c.map(course => new Course().deserializable(course)));
  }

  get courses(): Course[] {
    return this._courses;
  }

  getCoursesById(id: number): Course {
    for(let c of this.courses){
      if(c.idCourse == id){
        return c;
      }
    }
  }

  onChange(ev: any){
    this._currentCourse = ev;
  }
}


