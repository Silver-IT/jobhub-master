import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Estimate, EstimateStatus, SiteVisitSchedule } from '../../../../core/models/estimate';
import { ProjectService } from '../../../../core/services/project.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { AlertService } from '../../../../ui-kit/alert/alert.service';

@Component({
  selector: 'job-hub-site-visit-schedule-dialog',
  templateUrl: './site-visit-schedule-dialog.component.html',
  styleUrls: ['./site-visit-schedule-dialog.component.scss']
})
export class SiteVisitScheduleDialogComponent implements OnInit {

  isSaving = false;
  siteVisitSchedule: SiteVisitSchedule;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Estimate,
    private dialogRef: MatDialogRef<SiteVisitScheduleDialogComponent>,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private alert: AlertService,
    private projectDetailStateService: ProjectDetailStateService,
  ) {
  }

  ngOnInit(): void {
    this.siteVisitSchedule = this.data.siteVisitSchedules[0];
  }

  async schedule() {
    try {
      this.isSaving = true;
      const project = this.projectDetailStateService.project;
      if (project.estimate.status !== EstimateStatus.SiteVisitScheduled) {
        await this.projectService.acceptEstimate(this.data.project.id, { scheduleId: this.siteVisitSchedule.id }).toPromise();
      } else {
        await this.projectService.rescheduleSiteVisit(this.data.project.id, this.siteVisitSchedule.id).toPromise();
      }
      this.dialogRef.close(this.siteVisitSchedule);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to schedule a site visit. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }

  async requestAnotherDay() {
    try {
      this.isSaving = true;
      await this.projectService.requestAnotherDay(this.data.project.id).toPromise();
      this.alert.alert('Site visit change request', 'Your request for another day has been sent, in short you will receive a new site visit date.');
      this.dialogRef.close(null);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to request another day for a site visit. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }

}
