import { Pipe, PipeTransform } from '@angular/core';

import { Milestone, PaymentAddOn } from '../../core/models/milestone';

@Pipe({
  name: 'milestoneAmount'
})
export class MilestoneAmountPipe implements PipeTransform {

  transform(milestone: Milestone): number {
    if (!milestone.paidDate) { return milestone.amount; }
    const addOnAmountReducer = (sum, addOn: PaymentAddOn) => sum + addOn.amount;
    const holdAmount = milestone.hold && milestone.hold.paidDate ? milestone.hold.amount : 0;
    return milestone.amount + milestone.paymentAddOns.reduce(addOnAmountReducer, 0) + holdAmount;
  }

}
