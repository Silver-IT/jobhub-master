import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProjectDetail } from '../../core/models/project';
import { Estimate } from '../../core/models/estimate';
import { FinalProposal } from '../../core/models/final-proposal';

@Injectable()
export class ProjectDetailStateService {

  project: ProjectDetail;
  project$: BehaviorSubject<ProjectDetail> = new BehaviorSubject<ProjectDetail>(this.project);
  estimate: Estimate;
  estimate$: BehaviorSubject<Estimate> = new BehaviorSubject<Estimate>(this.estimate);
  finalProposal: FinalProposal;
  finalProposal$: BehaviorSubject<FinalProposal> = new BehaviorSubject<FinalProposal>(this.finalProposal);

  constructor() { }

  setProject(project: ProjectDetail) {
    this.project = project;
    this.project$.next(this.project);
  }

  setEstimate(estimate: Estimate) {
    this.estimate = estimate;
    this.estimate$.next(this.estimate);
  }

  setFinalProposal(finalProposal: FinalProposal) {
    this.finalProposal = finalProposal;
    this.finalProposal$.next(this.finalProposal);
  }
}
