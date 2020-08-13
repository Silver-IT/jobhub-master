import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { ProjectDetail, projectOptions, ProjectStatus } from '../../../core/models/project';
import { ProjectService } from '../../../core/services/project.service';
import { ROUTES } from '../../../core/data/routes';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { CustomerService } from '../../../core/services/customer.service';
import { PageName } from '../../../core/models/page-name';

@Component({
  selector: 'job-hub-project-detail-panel',
  templateUrl: './project-detail-panel.component.html',
  styleUrls: ['./project-detail-panel.component.scss']
})
export class ProjectDetailPanelComponent implements OnInit, OnDestroy {

  ProjectStatus = ProjectStatus;
  projectOptions = projectOptions;
  form: FormGroup;
  project: ProjectDetail;
  ROUTES = ROUTES;

  private sessionId: string;

  constructor(
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
    private customerService: CustomerService
  ) {
    this.project = this.projectDetailStateService.project;
  }

  get accessories(): FormArray {
    return this.form.get('accessories') as FormArray;
  }

  async ngOnInit() {
    this.form = this.projectService.buildProjectForm(this.project);
    this.sessionId = await this.customerService.pageVisit(PageName.BriefPage, this.project.id);
  }

  ngOnDestroy(): void {
    this.customerService.pageVisit(PageName.BriefPage, this.project.id, this.sessionId);
  }
}
