import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCourseAnnouncement'
})
export class FilterByCourseAnnouncementPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
