import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Milestone, MilestoneShowMode, MilestoneStatus } from '../../../../core/models/milestone';

@Component({
  selector: 'job-hub-milestone-payment-control',
  templateUrl: './milestone-payment-control.component.html',
  styleUrls: ['./milestone-payment-control.component.scss']
})
export class MilestonePaymentControlComponent implements OnInit {

  @Input() showMode: MilestoneShowMode;
  @Input() milestone: Milestone;
  @Input() readonly: boolean;
  @Input() disableActions: boolean;

  @Output() confirmCashPay = new EventEmitter<any>();
  @Output() editMilestone = new EventEmitter<any>();
  @Output() makePayment = new EventEmitter<any>();
  @Output() requestPayment = new EventEmitter<any>();

  MilestoneShowMode = MilestoneShowMode;
  MilestoneStatus = MilestoneStatus;

  constructor() { }

  ngOnInit(): void {
  }

  clickCashToggle($event) {
    $event.preventDefault();
    this.confirmCashPay.emit(this.milestone);
  }
}
