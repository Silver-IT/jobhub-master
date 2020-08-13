import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Milestone, MilestoneShowMode, MilestoneType } from '../../../../core/models/milestone';

@Component({
  selector: 'job-hub-deposit-milestone',
  templateUrl: './deposit-milestone.component.html',
  styleUrls: ['./deposit-milestone.component.scss']
})
export class DepositMilestoneComponent {

  @Input() milestone: Milestone;
  @Input() showMode; // true for customer side, false for contractor side

  @Output() makePayment = new EventEmitter<Milestone>();
  @Output() requestPayment = new EventEmitter<Milestone>();
  @Output() confirmCashPayment = new EventEmitter<Milestone>();
  @Output() editMilestone = new EventEmitter<Milestone>();

  MilestoneType = MilestoneType;
  MilestoneShowMode = MilestoneShowMode;
}
