import { Pipe, PipeTransform } from '@angular/core';

import { Project } from '../../core/models/project';
import { MilestoneType } from '../../core/models/milestone';

@Pipe({
  name: 'isMilestonePaid'
})
export class IsMilestonePaidPipe implements PipeTransform {

  transform(project: Project, milestoneType: MilestoneType): unknown {
    if (project && project.milestones) {
      const milestone = project.milestones.find(x => x.order === milestoneType);
      return milestone ? Boolean(milestone.paidDate) : false;
    } else {
      return false;
    }
  }

}
