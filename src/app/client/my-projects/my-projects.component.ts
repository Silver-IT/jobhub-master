import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ROUTES } from '../../core/data/routes';
import { AlertService } from '../../ui-kit/alert/alert.service';
import { ToastrService } from '../../core/services/toastr.service';
import { ProjectService } from '../../core/services/project.service';
import { FinalProposalStatus } from '../../core/models/final-proposal';

@Component({
  selector: 'job-hub-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  ROUTES = ROUTES;

  isLoading = false;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private alert: AlertService,
    private projectService: ProjectService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  async navigateToProjectDetail(id: string) {
    try {
      this.isLoading = true;
      const project = await this.projectService.getProjectById(id).toPromise();
      if (project.finalProposal) {
        if (project.finalProposal.status === FinalProposalStatus.Accepted) {
          this.router.navigate([ROUTES.app.root, ROUTES.app.project, id, ROUTES.app.payment]);
        } else {
          this.router.navigate([ROUTES.app.root, ROUTES.app.project, id, ROUTES.app.proposal]);
        }
      } else if (project.estimate) {
        this.router.navigate([ROUTES.app.root, ROUTES.app.project, id, ROUTES.app.estimate]);
      } else {
        this.router.navigate([ROUTES.app.root, ROUTES.app.project, id]);
      }
    } catch (e) {
      this.toastr.error(e, 'Failed to fetch project details.');
    } finally {
      this.isLoading = false;
    }
  }

  consultationRequired() {
    this.alert.alert('Consultation Call Scheduled', `One of our representatives will reach you in <span class="text-primary font-weight-medium">24 hours</span> to talk more about your project.`);
  }

}
