import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../core/models/auth';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: User): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
