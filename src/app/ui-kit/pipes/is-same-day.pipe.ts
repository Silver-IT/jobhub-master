import { Pipe, PipeTransform } from '@angular/core';
import { isSameDay } from 'date-fns';

@Pipe({
  name: 'isSameDay'
})
export class IsSameDayPipe implements PipeTransform {

  transform(value: Date, arg: Date): boolean {
    return isSameDay(value, arg);
  }

}
