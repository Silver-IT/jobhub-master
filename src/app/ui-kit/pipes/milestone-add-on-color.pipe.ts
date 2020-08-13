import { Pipe, PipeTransform } from '@angular/core';

import { MilestoneAddOnType } from '../../core/models/milestone';

@Pipe({
  name: 'milestoneAddOnColor'
})
export class MilestoneAddOnColorPipe implements PipeTransform {

  transform(type: MilestoneAddOnType): string {
    switch (type) {
      case MilestoneAddOnType.Addon:
        return '#5897BF';
      case MilestoneAddOnType.Hold:
        return '#E4A37C';
      case MilestoneAddOnType.Refund:
        return '#DA3E51';
      default:
        return '#07A39D';
    }
  }
}
