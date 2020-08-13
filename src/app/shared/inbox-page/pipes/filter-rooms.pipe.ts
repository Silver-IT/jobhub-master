import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from '../../../core/models/chat';

@Pipe({
  name: 'filterRooms'
})
export class FilterRoomsPipe implements PipeTransform {

  transform(rooms: Chat[], keyword: string): Chat[] {
    if (keyword) {
      return rooms.filter(x => {
        let source = x.project.name.toLowerCase();
        source += (x.contractor.firstName + x.contractor.lastName).toLowerCase();
        source += (x.customer.firstName + x.customer.lastName).toLowerCase();
        return source.search(keyword.toLowerCase()) >= 0;
      });
    } else {
      return rooms;
    }
  }

}
