import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AnnouncementService} from "../announcement/announcement.service";
import {Announcement} from 'src/app/announcement/announcement';
import {CourseService} from "../course/course.service";
import {Subscription} from "rxjs";
import {Course} from "../course/course";
import {ConnectedService} from "../connected.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})

export class CreateAnnouncementComponent implements OnInit {

  private _announcementTmp: Announcement = new Announcement;
  private _announcementCreated:EventEmitter<Announcement> = new EventEmitter();
  private _courses: Course[] = [];

  constructor(public courseService: CourseService, public connectedService: ConnectedService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.query().subscribe(c => this._courses = c.map(course => new Course().deserializable(course)));
  }

  get courses(): Course[] {
    return this._courses;
  }

  get announcementTmp(): Announcement {
    return this._announcementTmp;
  }

  createAnnouncement(){
    if(localStorage.getItem("type") === "tutor"){
      this.connectedService.connecting();
      this.announcementTmp.idTutor = this.connectedService.tutorConnected.idTutor;
      this._announcementCreated.next(this.announcementTmp)
      this.reset();
    }
  }

  reset(){
    this._announcementTmp = new Announcement;
  }

  @Output()
  get announcementCreated():EventEmitter<Announcement>{
    return this._announcementCreated;
  }

}
