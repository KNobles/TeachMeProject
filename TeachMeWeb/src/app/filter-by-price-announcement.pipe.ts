import { Pipe, PipeTransform } from '@angular/core';
import {Announcement} from "./announcement/announcement";

@Pipe({
  name: 'filterAnnouncement'
})
export class FilterByPriceAnnouncementPipe implements PipeTransform {

  public static readonly ORDER_DEFAULT: number = 1;
  public static readonly ORDER_ASCENDING: number = 2;
  public static readonly ORDER_DESCENDING: number = 3;

  transform(announcements: Announcement[], args?: any): any {

    switch(args){
      case FilterByPriceAnnouncementPipe.ORDER_ASCENDING: return announcements.sort((a, b) => {
        if (a.fee < b.fee) {
          return -1;
        } else if (a.fee > b.fee) {
          return 1;
        } else {
          return 0;
        }
      });
      case FilterByPriceAnnouncementPipe.ORDER_DESCENDING: return announcements.sort((a, b) =>{
        if (a.fee > b.fee) {
          return -1;
        } else if (a.fee < b.fee) {
          return 1;
        } else {
          return 0;
        }
      });
      case FilterByPriceAnnouncementPipe.ORDER_DEFAULT: return announcements;
    }
    return announcements;
  }

  public static intToOrderOption(num: number): string {
    switch(num){
      case FilterByPriceAnnouncementPipe.ORDER_DEFAULT: return "None";
      case FilterByPriceAnnouncementPipe.ORDER_ASCENDING: return "Ascending";
      case FilterByPriceAnnouncementPipe.ORDER_DESCENDING: return "Descending";
    }
  }

}
