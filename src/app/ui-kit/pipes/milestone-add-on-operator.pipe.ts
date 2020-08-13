import { Pipe, PipeTransform } from '@angular/core';

import { MilestoneAddOnType } from '../../core/models/milestone';

@Pipe({
  name: 'milestoneAddOnOperator'
})
export class MilestoneAddOnOperatorPipe implements PipeTransform {

  transform(type: MilestoneAddOnType): string {
    switch (type) {
      case MilestoneAddOnType.Addon:
        return '+';
      case MilestoneAddOnType.Hold:
        return '';
      case MilestoneAddOnType.Refund:
        return '-';
      default:
        return '';
    }
  }
}
