import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Milestone, MilestoneAddOnType, MilestoneShowMode, MilestoneType } from '../../../../core/models/milestone';
import { ProjectDetail } from '../../../../core/models/project';

@Component({
  selector: 'job-hub-final-milestone',
  templateUrl: './final-milestone.component.html',
  styleUrls: ['./final-milestone.component.scss']
})
export class FinalMilestoneComponent {

  @Input() milestone: Milestone;
  @Input() showMode: MilestoneShowMode;
  @Input() project: ProjectDetail;
  @Input() disableActions: boolean;

  @Output() makePayment = new EventEmitter<Milestone>();
  @Output() requestPayment = new EventEmitter<Milestone>();
  @Output() editMilestone = new EventEmitter<Milestone>();
  @Output() confirmCashPayment = new EventEmitter<Milestone>();
  @Output() review = new EventEmitter<Milestone>();
  @Output() removeAddOn = new EventEmitter<string>();
  @Output() removeHold = new EventEmitter<string>();
  @Output() removeRefund = new EventEmitter<string>();


  MilestoneType = MilestoneType;
  MilestoneAddOnType = MilestoneAddOnType;
  MilestoneShowMode = MilestoneShowMode;

}
