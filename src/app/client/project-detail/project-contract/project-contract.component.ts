import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ContractComponent } from '../../../shared/contract/contract.component';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ContractService } from '../../../core/services/contract.service';
import { CustomerService } from '../../../core/services/customer.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { CommonService } from '../../../core/services/common.service';
import { ROUTES } from '../../../core/data/routes';
import { PageName } from '../../../core/models/page-name';
import { Project } from '../../../core/models/project';
import { FinalProposal } from '../../../core/models/final-proposal';
import { ScrollPosition } from '../../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-project-contract',
  templateUrl: './project-contract.component.html',
  styleUrls: ['./project-contract.component.scss']
})
export class ProjectContractComponent implements OnInit, OnDestroy {

  @ViewChild(ContractComponent) contractComponent: ContractComponent;

  isLoading = false;
  project: Project;
  finalProposal: FinalProposal;
  ROUTES = ROUTES;

  private sessionId: string;

  constructor(
    private route: ActivatedRoute,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService,
    private router: Router,
    private contractService: ContractService,
    private customerService: CustomerService,
    private alertService: AlertService,
    private scrollToService: ScrollToService,
    private commonService: CommonService,
  ) {
    this.project = this.projectDetailStateService.project;
    this.finalProposal = this.projectDetailStateService.finalProposal;
  }

  async ngOnInit() {
    this.sessionId = await this.customerService.pageVisit(PageName.ContractPage, this.project.id);
  }

  ngOnDestroy(): void {
    this.customerService.pageVisit(PageName.ContractPage, this.project.id, this.sessionId);
  }

  print() {
    this.toastr.info('This feature is not published yet. Our consultant will help you to print this contract detail.');
  }

  async sign() {
    const typedName = this.contractComponent.typedName.toLowerCase();
    const customerName = `${this.project.user.firstName} ${this.project.user.lastName}`.toLowerCase();
    if (typedName !== customerName) {
      this.alertService.alert('Warning', 'Please type your name to confirm accepting the contract.');
      this.scrollToService.scrollTo({ target: 'signatureInput', container: ScrollPosition.CustomerPanelContainer });
      this.commonService.bounceInput('signatureInput');
      return;
    }
    try {
      this.isLoading = true;
      const project = await this.contractService.signContract(this.project.id).toPromise();
      this.project = project;
      this.projectDetailStateService.setProject(project);
      this.toastr.success('Successfully signed the contract.');
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to accept proposal. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
