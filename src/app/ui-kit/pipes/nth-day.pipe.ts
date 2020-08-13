import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays } from 'date-fns';

@Pipe({
  name: 'nthDay'
})
export class NthDayPipe implements PipeTransform {

  transform(date: Date, start: Date, end: Date): string {
    const total = Math.abs(differenceInDays(start, end));
    return `${total - Math.abs(differenceInDays(date, end)) + 1} / ${Math.abs(differenceInDays(start, end)) + 1}`;
  }

}
