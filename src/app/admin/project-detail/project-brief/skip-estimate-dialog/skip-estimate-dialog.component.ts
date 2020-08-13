import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { ProjectService } from '../../../../core/services/project.service';
import { SchedulerService } from '../../../../ui-kit/scheduler/scheduler.service';
import { Option } from '../../../../core/models/option';
import { User } from '../../../../core/models/auth';
import { ScheduleType } from '../../../../core/models/schedule';

@Component({
  selector: 'job-hub-skip-estimate-dialog',
  templateUrl: './skip-estimate-dialog.component.html',
  styleUrls: ['./skip-estimate-dialog.component.scss']
})
export class SkipEstimateDialogComponent implements OnInit {

  isSaving = false;

  form: FormGroup = this.fb.group({
    contractorUserId: ['', Validators.required],
    from: [null, Validators.required],
    to: [null, Validators.required]
  });

  contractorOptions: Option<User>[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SkipEstimateDialogComponent>,
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private schedulerService: SchedulerService
  ) {
  }

  ngOnInit(): void {
    this.contractorOptions = Boolean(this.data.contractors) ? this.data.contractors.map(contractor => ({
      value: contractor.id,
      label: `${contractor.firstName} ${contractor.lastName}`
    })) : [];
  }

  async skipEstimate() {
    const projectId = this.projectDetailStateService.project.id;
    try {
      this.isSaving = true;
      const project = await this.projectService.skipEstimate(projectId, this.form.value.contractorUserId, this.form.value.from, this.form.value.to).toPromise();
      this.dialogRef.close(project);
    } catch (e) {
      this.toastr.error(e, 'Failed to skip estimate step.');
    } finally {
      this.isSaving = false;
    }
  }

  selectSiteVisitedDate() {
    this.schedulerService.openFromDatePickerDialog(ScheduleType.SiteVisitSchedule, true)
      .subscribe(res => {
        if (res) {
          this.form.get('from').setValue(res.from.toISOString());
          this.form.get('to').setValue(res.to.toISOString());
        }
      });
  }
}
