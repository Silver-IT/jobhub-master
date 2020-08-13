import { Pipe, PipeTransform } from '@angular/core';

import { Milestone, MilestoneType } from '../../core/models/milestone';

@Pipe({
  name: 'reviewAvailable'
})
export class ReviewAvailablePipe implements PipeTransform {

  transform(milestones: Milestone[]): boolean {
    const finalMilestone = milestones.find(m => m.order === MilestoneType.Final);
    return Boolean(finalMilestone.paidDate);
  }

}
