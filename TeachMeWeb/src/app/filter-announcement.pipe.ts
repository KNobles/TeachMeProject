import { Pipe, PipeTransform } from '@angular/core';
import {Announcement} from "./announcement/announcement";

@Pipe({
  name: 'filterAnnouncement'
})
export class FilterAnnouncementPipe implements PipeTransform {

  public static readonly ALL_COURSES: number = -1;
  public static readonly ORDER_DEFAULT: number = 1;
  public static readonly ORDER_ASCENDING: number = 2;
  public static readonly ORDER_DESCENDING: number = 3;

  transform(announcements: Announcement[], argTwo: number, args?: number): any {
      announcements = this.orderByPrice(announcements, argTwo);
    if(args == FilterAnnouncementPipe.ALL_COURSES){
      return announcements;
    } else {
      return announcements.filter(a => a.idCourse == args);
    }

  }

  orderByPrice(announcements: Announcement[], args: number): any{
    switch(args){
      case FilterAnnouncementPipe.ORDER_ASCENDING: return announcements.sort((a, b) => {
        if (a.fee < b.fee) {
          return -1;
        } else if (a.fee > b.fee) {
          return 1;
        } else {
          return 0;
        }
      });
      case FilterAnnouncementPipe.ORDER_DESCENDING: return announcements.sort((a, b) =>{
        if (a.fee > b.fee) {
          return -1;
        } else if (a.fee < b.fee) {
          return 1;
        } else {
          return 0;
        }
      });
      case FilterAnnouncementPipe.ORDER_DEFAULT: return announcements.sort((a, b) => {
        if (a.idAnnouncement < b.idAnnouncement) {
          return -1;
        } else if (a.idAnnouncement > b.idAnnouncement) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return announcements;
  }

  public static intToOrderOption(num: number): string {
    switch(num){
      case FilterAnnouncementPipe.ORDER_DEFAULT: return "None";
      case FilterAnnouncementPipe.ORDER_ASCENDING: return "Ascending";
      case FilterAnnouncementPipe.ORDER_DESCENDING: return "Descending";
    }
  }

}
