import { Pipe, PipeTransform } from '@angular/core';
import { Job, parseJobType } from '../../core/models/hiring';

@Pipe({
  name: 'jobType'
})
export class JobTypePipe implements PipeTransform {

  transform(job: Job): string {
    return parseJobType(job.type, job.remote);
  }

}
