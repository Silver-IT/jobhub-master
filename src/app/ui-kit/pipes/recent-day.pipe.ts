import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { isToday, isTomorrow, isYesterday } from 'date-fns';

@Pipe({
  name: 'recentDay'
})
export class RecentDayPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe
  ) {
  }

  transform(value: string): string {
    const date = new Date(value);
    if (isToday(date)) {
      return 'Today';
    } else if (isTomorrow(date)) {
      return 'Tomorrow';
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else {
      return this.datePipe.transform(date, 'mediumDate');
    }
  }

}
