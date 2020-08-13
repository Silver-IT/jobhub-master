import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../core/services/project.service';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ProjectDetail } from '../../../core/models/project';
import { ToastrService } from '../../../core/services/toastr.service';
import { CustomerPageVisitHistory } from '../../../core/models/customer';

@Component({
  selector: 'job-hub-project-customer-activity',
  templateUrl: './project-customer-activity.component.html',
  styleUrls: ['./project-customer-activity.component.scss']
})
export class ProjectCustomerActivityComponent implements OnInit {

  history: CustomerPageVisitHistory[] = [];
  project: ProjectDetail;
  isLoading = false;

  constructor(
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService
  ) {
    this.project = this.projectDetailStateService.project;
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  async loadHistory() {
    try {
      this.isLoading = true;
      this.history = await this.projectService.getCustomerVisitHistoryByProjectId(this.project.id).toPromise();
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to load visit history.');
    } finally {
      this.isLoading = false;
    }
  }

}
