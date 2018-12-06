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

  constructor(public courseService: CourseService, public announcementService: AnnouncementService, public connectedService: ConnectedService, public router: Router) { }

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

  get title(): string{
    return this.announcementTmp.title;
  }

  set title(value: string) {
    this.announcementTmp.title = value;
  }

  get description(): string{
    return this.announcementTmp.description;
  }

  set description(value: string) {
    this.announcementTmp.description = value;
  }

  get fee(): number{
    return this.announcementTmp.fee;
  }

  set fee(value: number){
    this.announcementTmp.fee = value;
  }

  createAnnouncement(){
    if(localStorage.getItem("type") === "tutor"){
      this.connectedService.connecting();
      this.announcementTmp.idTutor = this.connectedService.tutorConnected.idTutor;
      this.announcementService.create(this.announcementTmp).subscribe();
      alert("Votre annonce a bien été créée")
      this.router.navigate(['/Home']);
    }
    else
    {
      alert("Veuillez-vous connecter avant de créer une annonce");
      this.router.navigate(['/Login']);
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
