import { Pipe, PipeTransform } from '@angular/core';
import { addDays, addHours } from 'date-fns';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: string, segment: 'd' | 'h', limit: number): boolean {
    const date = new Date(value);
    if (segment === 'd') {
      const limited = addDays(date, limit);
      return limited < new Date();
    } else {
      const limited = addHours(date, limit);
      return limited < new Date();
    }
  }

}
