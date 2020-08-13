import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ProjectDetail, projectOptions, ProjectStatus } from '../../../core/models/project';
import { ProjectService } from '../../../core/services/project.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ROUTES, toAbsolutePath } from '../../../core/data/routes';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { User, UserRole } from '../../../core/models/auth';
import { Location } from '../../../core/models/base';
import { projectGeneralForm } from '../../../core/data/form-labels';
import { CommonService } from '../../../core/services/common.service';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { SkipEstimateDialogComponent } from './skip-estimate-dialog/skip-estimate-dialog.component';
import { TagCategory } from '../../../core/models/tag';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { Idea } from '../../../core/models/idea-board';
import { ImagePreviewDialogService } from '../../../shared/image-preview-dialog/image-preview-dialog.service';
import { FinalProposalStatus } from '../../../core/models/final-proposal';
import { declineReasonLabels } from '../../../core/models/decline';
import { EstimateStatus } from '../../../core/models/estimate';
import { AlertService } from '../../../ui-kit/alert/alert.service';

@Component({
  selector: 'job-hub-project-brief',
  templateUrl: './project-brief.component.html',
  styleUrls: ['./project-brief.component.scss'],
})
export class ProjectBriefComponent implements OnInit, OnDestroy {

  isEdited = false; // value to store project edit status
  isLoading = false;
  project: ProjectDetail;
  form: FormGroup;
  projectOptions = projectOptions;
  ProjectStatus = ProjectStatus;
  prefix = projectGeneralForm.prefix;
  TagCategory = TagCategory;
  ROUTES = ROUTES;
  ScrollPosition = ScrollPosition;
  UserRole = UserRole;
  contractors: User[];
  customer: User;
  ideas: Idea[] = [];
  FinalProposalStatus = FinalProposalStatus;
  EstimateStatus = EstimateStatus;
  declineReasonLabels = declineReasonLabels;
  proposalDeclineReasons = '';
  estimateDeclineReasons = '';

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private scrollToService: ScrollToService,
    private ideaBoardService: IdeaBoardService,
    private imagePreviewDialogService: ImagePreviewDialogService,
    private alertService: AlertService,
  ) {
    this.project = this.projectDetailStateService.project;
    this.customer = this.project.user;
    this.contractors = this.route.snapshot.data.contractors;
  }

  get accessories(): FormArray {
    return this.form.get('accessories') as FormArray;
  }

  ngOnInit(): void {
    this.form = this.projectService.buildProjectForm(this.project);
    this.form.valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(() => {
      this.isEdited = true;
    });
    this.loadIdeaBoard();
    if (this.project.finalProposal && this.project.finalProposal.status === FinalProposalStatus.Declined) {
      this.proposalDeclineReasons = this.project.finalProposal.declineReasons.map(reason => declineReasonLabels[reason]).join('<br>');
    }
    if (this.project.estimate && this.project.estimate.status === EstimateStatus.Declined) {
      this.estimateDeclineReasons = this.project.estimate.declineReasons.map(reason => declineReasonLabels[reason]).join('<br>');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  addAccessory() {
    this.accessories.push(this.projectService.buildAccessoryForm());
  }

  deleteAccessory(index: number) {
    this.accessories.removeAt(index);
  }

  addressChanged(location: Location) {
    this.form.get('latitude').setValue(location.latitude);
    this.form.get('longitude').setValue(location.longitude);
  }

  previewIdeaImage(url: string) {
    this.imagePreviewDialogService.openImagePreviewDialog(url);
  }

  async update(notify = true) {
    try {
      if (this.form.invalid) {
        this.commonService.findInvalidField(this.form, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.AdminPanelContainer);
        return;
      }
      this.isLoading = true;
      const payload = this.form.value;
      payload.attachments = payload.attachments.map(x => typeof x !== 'string' ? x.url : x);
      const res = await this.projectService.updateProjectById(this.project.id, payload).toPromise();
      this.projectDetailStateService.setProject({...this.projectDetailStateService.project, ...res});
      if (this.projectDetailStateService.estimate && !this.projectDetailStateService.project.estimate) {
        this.projectDetailStateService.setEstimate(null);
      }
      if (notify) {
        this.toastr.success('Successfully updated the project detail.');
      }
      this.isEdited = false;
    } catch (e) {
      this.toastr.error(e, 'Sorry, Failed to update project detail. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async skipEstimate() {
    const dialogRef = this.dialog.open(SkipEstimateDialogComponent, {
      width: '460px',
      closeOnNavigation: true,
      data: {contractors: this.contractors}
    });
    dialogRef.afterClosed().pipe(filter(data => data))
      .subscribe(async project => {
        try {
          this.isLoading = true;
          project.status = ProjectStatus.SiteVisitScheduled;
          project.siteVisitPassed = true;
          this.projectDetailStateService.setProject(project);
          const finalProposal = await this.projectService.getFinalProposalByProjectId(project.id).toPromise();
          const estimate = await this.projectService.getEstimateByProjectId(project.id).toPromise();
          this.projectDetailStateService.setFinalProposal(finalProposal);
          this.projectDetailStateService.setEstimate(estimate);
          this.router.navigateByUrl(toAbsolutePath([ROUTES.admin.root, ROUTES.admin.projects, project.id, ROUTES.admin.project.finalProposal]));
        } catch (e) {
          this.toastr.error(e, 'Unable to fetch project details.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  continueToPayment() {
    this.alertService.yesNo('Confirm', 'This operation is not reversible. Are you sure continue?')
      .pipe(filter(r => r))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          const project = await this.projectService.continueToPayment(this.project.id).toPromise();
          this.projectDetailStateService.setProject(project);
          this.projectDetailStateService.setEstimate(project.estimate);
          this.projectDetailStateService.setFinalProposal(project.finalProposal);
          this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, project.id, ROUTES.admin.project.management]);
        } catch (e) {
          this.toastr.error(e, 'Unable to continue to payment.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async createEstimate() {
    try {
      this.isLoading = true;
      if (this.isEdited) {
        await this.update(false);
      }
      if (!this.projectDetailStateService.estimate) {
        const estimate = await this.projectService.getEstimateByProjectId(this.project.id).toPromise();
        this.projectDetailStateService.setEstimate(estimate);
      }
      this.router.navigateByUrl(toAbsolutePath([ROUTES.admin.root, ROUTES.admin.projects, this.project.id, ROUTES.admin.project.estimate]));
      this.scrollToService.scrollTo({ target: ScrollPosition.AdminProjectDetail, container: ScrollPosition.AdminPanelContainer });
    } catch (e) {
      this.toastr.error(e, 'Unable to fetch estimate information. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private async loadIdeaBoard() {
    try {
      this.isLoading = true;
      this.ideas = await this.ideaBoardService.getIdeaBoardByCustomerId(this.project.user.id).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
