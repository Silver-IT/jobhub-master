import { Component, OnInit } from '@angular/core';

import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';

@Component({
  selector: 'job-hub-make-refund-dialog',
  templateUrl: './make-refund-dialog.component.html',
  styleUrls: ['./make-refund-dialog.component.scss']
})
export class MakeRefundDialogComponent implements OnInit {

  project = this.projectDetailStateService.project;
  isSaving = false;

  constructor(
    private projectDetailStateService: ProjectDetailStateService
  ) { }

  ngOnInit(): void {
  }

  makeRefund() {
    // TODO: add make refund handler
  }

}
