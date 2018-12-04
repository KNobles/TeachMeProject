import { Pipe, PipeTransform } from '@angular/core';
import {Announcement} from "./announcement/announcement";

@Pipe({
  name: 'filterByCourseAnnouncement'
})
export class FilterByCourseAnnouncementPipe implements PipeTransform {

  public static readonly ALL_COURSES: number = -1;

  transform(announcements: Announcement[], args?: any): any {
    // switch(args){
    //   case FilterByCourseAnnouncementPipe.ANGLAIS: return announcements.filter(a => a.idCourse == FilterByCourseAnnouncementPipe.ANGLAIS);
    // }
    if(args == FilterByCourseAnnouncementPipe.ALL_COURSES){
      return announcements;
    } else {
      return announcements.filter(a => a.idCourse == args);
    }

  }

}
