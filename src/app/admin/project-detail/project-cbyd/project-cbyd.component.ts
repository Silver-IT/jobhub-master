import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ToastrService } from '../../../core/services/toastr.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { ProjectService } from '../../../core/services/project.service';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ROUTES } from '../../../core/data/routes';
import { projectGeneralForm } from '../../../core/data/form-labels';

@Component({
  selector: 'job-hub-project-cbyd',
  templateUrl: './project-cbyd.component.html',
  styleUrls: ['./project-cbyd.component.scss']
})
export class ProjectCbydComponent implements OnInit {

  ROUTES = ROUTES;
  project = this.projectDetailStateService.project;
  form: FormGroup = this.initCbydRequestsForm();
  prefix = projectGeneralForm.prefix;
  readonly = true;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private alert: AlertService,
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  private initCbydRequestsForm() {
    return this.fb.group({
      startDate: [this.project.finalProposal.startDate || null, Validators.required],
      endDate: [this.project.finalProposal.endDate || null, Validators.required],
      governmentConfirmed: [{ value: this.project.governmentConfirmed, disabled: this.project.governmentConfirmed }, Validators.requiredTrue],
      governmentCallComment: this.project.governmentCallComment || null
    });
  }

  navigateToProjectManagement() {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, this.project.id, ROUTES.admin.project.management]);
  }

  async onToggleGovernmentConfirmed(event) {
    event.preventDefault();
    if (this.project.governmentConfirmed) {
      return;
    }
    this.alert.yesNo('Confirmation', 'Have you finished a government call?')
      .pipe(filter(s => s))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          await this.projectService.confirmGovernmentCallByProjectId(this.project.id, this.form.value.governmentCallComment).toPromise();
          this.form.controls.governmentConfirmed.setValue(true);
          this.project.governmentConfirmed = true;
          this.project.governmentCallComment = this.form.value.governmentCallComment;
          this.form.controls.governmentConfirmed.disable();
        } catch (e) {
          this.toastr.error(e, 'Sorry, Failed to submit your government call result. Please try again.');
        } finally {
          this.isLoading = false;
        }
      });
  }
}
