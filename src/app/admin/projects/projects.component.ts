import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ROUTES } from '../../core/data/routes';
import { AuthService } from '../../core/services/auth.service';
import { OverviewService } from '../../core/services/overview.service';
import { UserRole } from '../../core/models/auth';
import { enumToOptions } from '../../core/utils/enum.util';
import { ProjectAccessoryType, ProjectStatusFilterType } from '../../core/models/project';
import { SortByDateType } from '../../core/models/base';
import { ProjectsStat } from '../../core/models/overview';

@Component({
  selector: 'job-hub-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  contractorOptions = [];
  dateSortOptions = enumToOptions<SortByDateType>(SortByDateType);
  statusFilterOptions = enumToOptions<ProjectStatusFilterType>(ProjectStatusFilterType);
  projectTypeOptions = [...enumToOptions<ProjectAccessoryType>(ProjectAccessoryType), { label: 'All', value: null }];

  ProjectStatusFilterType = ProjectStatusFilterType;

  projectsStat: ProjectsStat = {
    inProgress: 0,
    estimatePending: 0,
    finalProposalPending: 0,
    pendingSiteVisitSchedule: 0
  };
  isProjectsStatLoading = false;

  projectForm: FormGroup = this.fb.group({
    contractorId: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.contractorId || null) : null,
    sortByDate: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.sortByDate || SortByDateType.MostRecent) : SortByDateType.MostRecent,
    status: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.status || ProjectStatusFilterType.All) : ProjectStatusFilterType.All,
    projectType: this.route.snapshot.queryParams ? (this.route.snapshot.queryParams.projectType || null) : null,
  });

  ROUTES = ROUTES;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private overviewService: OverviewService,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.user.role === UserRole.Contractor) {
      this.contractorOptions = [
        { value: null, label: 'All' },
        { value: this.authService.user.id, label: 'Assigned to me' },
      ];
    } else if (this.authService.user.role === UserRole.SuperAdmin) {
      this.contractorOptions = [
        { value: null, label: 'All' },
        ...this.route.snapshot.data.contractors.map(x => ({
          value: x.id, label: x.firstName + ' ' + x.lastName
        }))
      ];
    }
    this.loadProjectsStat();
  }

  selectCard(status: ProjectStatusFilterType) {
    this.projectForm.controls.contractorId.setValue(null);
    this.projectForm.controls.sortByDate.setValue(SortByDateType.MostRecent);
    this.projectForm.controls.status.setValue(status);
    this.projectForm.controls.projectType.setValue(null);
  }

  navigateToProjectDetail(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, id]);
  }

  private async loadProjectsStat() {
    try {
      this.isProjectsStatLoading = true;
      this.projectsStat = await this.overviewService.getProjectsStat().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isProjectsStatLoading = false;
    }
  }
}
