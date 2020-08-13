import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-final-proposal-review-warning-alert',
  templateUrl: './final-proposal-review-warning-alert.component.html',
  styleUrls: ['./final-proposal-review-warning-alert.component.scss']
})
export class FinalProposalReviewWarningAlertComponent implements OnInit {

  showWarning = true;

  constructor() { }

  ngOnInit(): void {
  }

}
