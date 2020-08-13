import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProjectDetail } from '../../core/models/project';
import { MilestoneType } from '../../core/models/milestone';
import { ROUTES } from '../../core/data/routes';
import { ProjectStatusPipe } from '../../ui-kit/pipes/project-status.pipe';
import { MapService } from '../../ui-kit/map/map.service';
import { ProjectDetailStateService } from '../../shared/project-detail-state/project-detail-state.service';
import { FinalProposal, FinalProposalStatus } from '../../core/models/final-proposal';
import { ScrollPosition } from '../../core/data/scroll-pos';
import { Estimate } from '../../core/models/estimate';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'job-hub-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  ROUTES = ROUTES;
  project$: Observable<ProjectDetail>;
  project: ProjectDetail;
  estimate$: Observable<Estimate>;
  estimate: Estimate;
  MilestoneType = MilestoneType;
  finalProposal$: Observable<FinalProposal>;
  finalProposal: FinalProposal;
  FinalProposalStatus = FinalProposalStatus;
  me = this.authService.user;
  ScrollPosition = ScrollPosition;

  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private projectDetailStateService: ProjectDetailStateService,
    private projectStatusPipe: ProjectStatusPipe,
    private mapService: MapService,
    private authService: AuthService
  ) {
    this.project$ = this.projectDetailStateService.project$;
    this.estimate$ = this.projectDetailStateService.estimate$;
    this.finalProposal$ = this.projectDetailStateService.finalProposal$;
    const project = this.projectDetailStateService.project;
    project.status = projectStatusPipe.transform(project);
    this.project = project;
    this.projectDetailStateService.setProject(this.project);
  }

  ngOnInit(): void {
    this.project$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => {
        this.project = value;
      });
    this.estimate$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => this.estimate = value);
    this.finalProposal$.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(value => this.finalProposal = value);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  openMapDialog() {
    if (this.project.latitude && this.project.longitude) {
      this.mapService.openMapDialog(this.project.latitude, this.project.longitude, this.project.address);
    }
  }
}
