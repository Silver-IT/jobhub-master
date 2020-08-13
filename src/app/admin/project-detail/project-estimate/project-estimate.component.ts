import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';

enum EstimateStep {
  General = 'GENERAL',
  Schedule = 'SCHEDULE',
  Preview = 'PREVIEW',
}

@Component({
  selector: 'job-hub-project-estimate',
  templateUrl: './project-estimate.component.html',
  styleUrls: ['./project-estimate.component.scss']
})
export class ProjectEstimateComponent implements OnInit {

  isEditing = false;
  EstimateStep = EstimateStep;
  step: EstimateStep = EstimateStep.General;

  constructor(
    private route: ActivatedRoute,
    private projectDetailStateService: ProjectDetailStateService
  ) {
    if (this.projectDetailStateService.estimate.id) {
      this.step = EstimateStep.Preview;
    }
  }

  ngOnInit(): void {
  }

  edit() {
    this.isEditing = true;
    this.step = EstimateStep.General;
  }

}
