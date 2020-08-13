import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-estimate-review-warning-alert',
  templateUrl: './estimate-review-warning-alert.component.html',
  styleUrls: ['./estimate-review-warning-alert.component.scss']
})
export class EstimateReviewWarningAlertComponent implements OnInit {

  showWarning = true;

  constructor() { }

  ngOnInit(): void {
  }

}
