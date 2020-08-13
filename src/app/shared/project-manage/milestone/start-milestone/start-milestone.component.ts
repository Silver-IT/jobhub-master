import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Milestone, MilestoneShowMode, MilestoneType } from '../../../../core/models/milestone';
import { ProjectDetail } from '../../../../core/models/project';
import { ROUTES } from '../../../../core/data/routes';

@Component({
  selector: 'job-hub-start-milestone',
  templateUrl: './start-milestone.component.html',
  styleUrls: ['./start-milestone.component.scss']
})
export class StartMilestoneComponent {

  @Input() milestone: Milestone;
  @Input() showMode = MilestoneShowMode.Admin; // true for customer side, false for contractor side
  @Input() disableActions: boolean;
  @Input() project: ProjectDetail;

  @Output() makePayment = new EventEmitter<Milestone>();
  @Output() requestPayment = new EventEmitter<Milestone>();
  @Output() confirmCashPayment = new EventEmitter<Milestone>();

  MilestoneType = MilestoneType;
  MilestoneShowMode = MilestoneShowMode;

  constructor(
    private router: Router,
  ) {
  }

  pickOutPavers() {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, this.project.id, ROUTES.admin.project.chooseMaterial]);
  }
}
