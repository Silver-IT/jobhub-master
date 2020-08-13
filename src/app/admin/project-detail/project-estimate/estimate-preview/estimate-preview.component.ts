import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { filter } from 'rxjs/operators';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { Estimate, EstimateStatus } from '../../../../core/models/estimate';
import { ProjectService } from '../../../../core/services/project.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { AlertService } from '../../../../ui-kit/alert/alert.service';
import { AdminLayoutService } from '../../../../layout/admin-layout/admin-layout.service';
import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { ProjectStatus } from '../../../../core/models/project';
import { User, UserRole } from '../../../../core/models/auth';
import { ROUTES, toAbsolutePath } from '../../../../core/data/routes';
import { ScrollPosition } from '../../../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-estimate-preview',
  templateUrl: './estimate-preview.component.html',
  styleUrls: ['./estimate-preview.component.scss'],
})
export class EstimatePreviewComponent implements OnInit {

  @Input() isEditing = false;
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  project$ = this.projectDetailStateService.project$;
  contractors = this.route.snapshot.data.contractors;
  isLoading = false;
  estimate: Estimate = this.projectDetailStateService.estimate;
  form: FormGroup;
  UserRole = UserRole;
  customer: User;
  EstimateStatus = EstimateStatus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private adminLayoutService: AdminLayoutService,
    private scrollToService: ScrollToService,
    private alertService: AlertService
  ) {
    this.customer = this.projectDetailStateService.project.user;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    if (!this.estimate.id) {
      this.toastr.info('Please assign a contractor to this project.');
      this.adminLayoutService.scrollTop(0);
    }
  }

  onEdit() {
    if (!this.isEditing) {
      this.edit.emit();
      this.scrollToService.scrollTo({
        target: ScrollPosition.AdminProjectDetail,
        container: ScrollPosition.AdminPanelContainer
      });
    } else {
      this.sendEstimate();
    }
  }

  async continueToProposal() {
    this.alertService.yesNo('Confirmation', 'The customer hasn\'t accepted the estimate yet. Are you sure continue to proposal?')
      .pipe(filter(v => v))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          const projectId = this.estimate.project.id;
          const project = await this.projectService.getProjectById(projectId).toPromise();
          this.projectDetailStateService.setProject(project);
          const estimate = await this.projectService.continueToProposal(projectId).toPromise();
          this.projectDetailStateService.setEstimate(estimate);
          const proposal = await this.projectService.getFinalProposalByProjectId(projectId).toPromise();
          this.projectDetailStateService.setFinalProposal(proposal);
          this.router.navigateByUrl(toAbsolutePath([ROUTES.admin.root, ROUTES.admin.projects, projectId, ROUTES.admin.project.finalProposal]));
        } catch (e) {
          this.toastr.error(e, 'Unable to accept the request.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async sendEstimate() {
    try {
      this.isLoading = true;
      const projectId = this.projectDetailStateService.project.id;
      this.estimate.contractorUserId = this.form.value.contractorUserId;
      if (this.estimate.status === EstimateStatus.Declined) {
        this.estimate.status = EstimateStatus.Pending;
      }
      this.estimate = await this.projectService.submitEstimateByProjectId(projectId, this.estimate).toPromise();
      this.projectDetailStateService.setProject({
        ...this.projectDetailStateService.project,
        contractor: { user: { id: this.form.value.contractorUserId } as any },
        estimate: this.estimate,
        status: ProjectStatus.ReviewEstimate
      });
      this.projectDetailStateService.setEstimate(this.estimate);
      if (this.isEditing) {
        this.toastr.success('Your estimate is successfully updated.');
        this.isEditing = false;
      } else {
        this.toastr.success('Your estimate is successfully sent to client.');
      }
      this.scrollToService.scrollTo({
        target: ScrollPosition.AdminProjectDetail,
        container: ScrollPosition.AdminPanelContainer
      });
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to submit your estimate. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async createFinalProposal() {
    try {
      this.isLoading = true;
      const projectId = this.projectDetailStateService.project.id;
      if (!this.projectDetailStateService.finalProposal) {
        const finalProposal = await this.projectService.getFinalProposalByProjectId(projectId).toPromise();
        this.projectDetailStateService.setFinalProposal(finalProposal);
      }
      this.router.navigateByUrl(toAbsolutePath([ROUTES.admin.root, ROUTES.admin.projects, projectId, ROUTES.admin.project.finalProposal]));
    } catch (e) {
      this.toastr.error(e, 'Failed to fetch final proposal data. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }
}
