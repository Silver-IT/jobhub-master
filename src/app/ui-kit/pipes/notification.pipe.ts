import { Pipe, PipeTransform } from '@angular/core';
import { Event, EventType } from '../../core/models/event';

@Pipe({
  name: 'notification'
})
export class NotificationPipe implements PipeTransform {

  transform(value: Event, ...args: unknown[]): string {
    if (value.type === EventType.YourProjectHasUpdated || value.type === EventType.NewProjectHasBeenRegistered) {
      return value.meta.name;
    } else if (value.type === EventType.YouHaveNewEstimate || value.type === EventType.YouHaveNewProposal
      || value.type === EventType.EstimateHasBeenAccepted || value.type === EventType.EstimateHasBeenDeclined
      || value.type === EventType.FinalProposalHasBeenAccepted || value.type === EventType.FinalProposalHasBeenDeclined) {
      return value.meta.project.name;
    } else if (value.type === EventType.UserRegisteredEvent) {
      return `${value.meta.firstName} ${value.meta.lastName}`;
    } else if (value.type === EventType.ContractorRequestedToReleaseMilestone || value.type === EventType.CustomerReleasedMilestoneEvent ||
      value.type === EventType.CustomerRequestedCashPaymentEvent || value.type === EventType.ContractorConfirmedCashPayment) {
      return `${value.meta.project.name}`;
    } else if (value.type === EventType.ContractorRequestedReviewEvent) {
      return `${value.meta.name}`;
    } else if (value.type === EventType.CustomerSignedContractEvent || value.type === EventType.CustomerAcceptedContractEvent || value.type === EventType.ContractReadyEvent) {
      return value.meta.name;
    } else if (value.type === EventType.CustomerRescheduledSiteVisitEvent ||
      value.type === EventType.CustomerRequestedSiteVisitChangeEvent ||
      value.type === EventType.CustomerCanceledSiteVisitEvent ||
      value.type === EventType.SiteVisitScheduleUpdatedEvent ||
      value.type === EventType.PickOutPaversScheduleUpdatedEvent
    ) {
      return value.meta.name;
    }
  }
}
