import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

import { AlertService } from '../../../ui-kit/alert/alert.service';
import { TimePassedPipe } from '../../../ui-kit/pipes/time-passed.pipe';
import { FinalProposal, FinalProposalStatus } from '../../../core/models/final-proposal';
import { DeclineSource } from '../../../core/models/decline';
import { ProjectService } from '../../../core/services/project.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { DeclineService } from '../decline/decline.service';
import { ROUTES } from '../../../core/data/routes';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { AgreementService } from '../agreement/agreement.service';
import { ProposalFormComponent } from '../../../shared/final-proposal/proposal-form.component';
import { CustomerService } from '../../../core/services/customer.service';
import { PageName } from '../../../core/models/page-name';
import { AgreementDialogAction } from '../agreement/agreement-dialog';

@Component({
  selector: 'job-hub-project-final-proposal',
  templateUrl: './project-final-proposal.component.html',
  styleUrls: ['./project-final-proposal.component.scss'],
  providers: [TimePassedPipe]
})
export class ProjectFinalProposalComponent implements OnInit, OnDestroy {

  @ViewChild(ProposalFormComponent) proposalFormRef: ProposalFormComponent;

  canBeDeclined = false;
  isLoading = false;
  proposal: FinalProposal;
  project = this.projectDetailStateService.project;

  ROUTES = ROUTES;
  FinalProposalStatus = FinalProposalStatus;

  private sessionId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private declineService: DeclineService,
    private agreementService: AgreementService,
    private alert: AlertService,
    private timePassedPipe: TimePassedPipe,
    private customerService: CustomerService
  ) {
  }

  async ngOnInit() {
    this.proposal = this.projectDetailStateService.finalProposal;
    this.customerService.customerPageVisit(PageName.ProposalPage, this.project.id).subscribe(); // log customer visit
    this.canBeDeclined = this.proposal.status === FinalProposalStatus.Pending;
    this.sessionId = await this.customerService.pageVisit(PageName.ProposalPage, this.project.id);
  }

  ngOnDestroy(): void {
    this.customerService.pageVisit(PageName.ProposalPage, this.project.id, this.sessionId);
  }

  acceptProject() {
    this.agreementService.openAgreeDialog().pipe(
      filter(res => res === AgreementDialogAction.Agreed)
    ).subscribe(async () => {
      try {
        this.isLoading = true;
        const accepted = this.proposal.costEstimates.filter(item => item.accept).map(item => item.id);
        await this.projectService.acceptProposal(this.project.id, accepted).toPromise();
        const finalProposal = {
          ...this.proposal,
          status: FinalProposalStatus.Accepted
        };
        this.projectDetailStateService.setFinalProposal(finalProposal);
        this.router.navigate([ROUTES.app.root, ROUTES.app.project, this.project.id, ROUTES.app.payment]);
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to accept proposal. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }

  formChange($event) {
    this.proposal = $event.value;
  }

  decline() {
    this.declineService.showDeclineDialog(DeclineSource.FromFinalProposal, { ...this.proposal, project: this.project }).afterClosed().pipe(
      filter(value => value)
    ).subscribe(() => {
      this.proposal.status = FinalProposalStatus.Declined;
    });
  }
}
