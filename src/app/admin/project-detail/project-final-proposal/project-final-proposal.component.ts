import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../core/services/project.service';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { FinalProposalStatus } from '../../../core/models/final-proposal';
import { User } from '../../../core/models/auth';

enum FinalProposalStep {
  General = 'GENERAL',
  Preview = 'PREVIEW',
}

@Component({
  selector: 'job-hub-project-final-proposal',
  templateUrl: './project-final-proposal.component.html',
  styleUrls: ['./project-final-proposal.component.scss']
})
export class ProjectFinalProposalComponent implements OnInit {

  project = this.projectDetailStateService.project;
  proposal = this.projectDetailStateService.finalProposal;
  customer: User;
  FinalProposalStatus = FinalProposalStatus;

  FinalProposalStep = FinalProposalStep;
  step: FinalProposalStep = this.proposal.id ? FinalProposalStep.Preview : FinalProposalStep.General;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
  ) {
    this.customer = this.projectDetailStateService.project.user;
  }

  ngOnInit(): void {
  }
}
