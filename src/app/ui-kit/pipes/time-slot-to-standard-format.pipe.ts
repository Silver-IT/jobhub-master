import { Pipe, PipeTransform } from '@angular/core';
import { militaryToStandard } from '../../core/utils/time.util';

@Pipe({
  name: 'timeSlotToStandardFormat'
})
export class TimeSlotToStandardFormatPipe implements PipeTransform {

  transform(value: string, isRange: boolean): string {
    if (value === '') {
      return value;
    }
    if (isRange) {
      const matches = value.match(/(.*) - (.*)/);
      const from = militaryToStandard(matches[1]);
      const to = militaryToStandard(matches[2]);
      return `${from} - ${to}`;
    }
    return militaryToStandard(value);
  }
}
