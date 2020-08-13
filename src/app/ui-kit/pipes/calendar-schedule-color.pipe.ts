import { Pipe, PipeTransform } from '@angular/core';

import { Schedule, ScheduleStatus } from '../../core/models/schedule';

@Pipe({
  name: 'calendarScheduleColor'
})
export class CalendarScheduleColorPipe implements PipeTransform {

  color;
  bgColor;

  transform(schedule: Schedule): { color: string, bgColor: string } {
    switch (schedule.status) {
      case ScheduleStatus.Pending:
        this.color = '#F18F01';
        this.bgColor = '#FEF9F2';
        break;
      case ScheduleStatus.Accepted:
        this.color = '#07A39D';
        this.bgColor = '#F7FCFC';
        break;
      case ScheduleStatus.Done:
        this.color = '#9EC97B';
        this.bgColor = '#E7FBD7';
        break;
      case ScheduleStatus.Declined:
        this.color = '#F8596D';
        this.bgColor = '#FFE8EB';
        break;
      case ScheduleStatus.Expired:
        this.color = '#C0C0C0';
        this.bgColor = '#F7F8FA';
        break;
      default:
        this.color = '#F18F01';
        this.bgColor = '#FEF9F2';
        break;
    }
    return {
      color: this.color,
      bgColor: this.bgColor
    };
  }

}
