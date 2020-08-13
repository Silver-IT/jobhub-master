import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { projectOptions } from '../../../../core/models/project';
import { ProjectService } from '../../../../core/services/project.service';
import { DeclineSource } from '../../../../core/models/decline';
import { AlertService } from '../../../../ui-kit/alert/alert.service';

@Component({
  selector: 'job-hub-decline-dialog',
  templateUrl: './decline-dialog.component.html',
  styleUrls: ['./decline-dialog.component.scss']
})
export class DeclineDialogComponent implements OnInit {

  declineReasons = projectOptions.declineReasons;

  isSaving = false;

  declineForm: FormGroup = this.fb.group({
    declineReasons: [[], Validators.required],
    declineComment: ['']
  });

  constructor(
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeclineDialogComponent>,
    private fb: FormBuilder,
    private projectService: ProjectService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
  }

  async decline() {
    const value = this.declineForm.value;
    try {
      this.isSaving = true;
      if (this.data.declineSource === DeclineSource.FromEstimate) {
        const estimate = await this.projectService.declineEstimate(this.data.payload.project.id, value).toPromise();
        this.alertService.alert('Estimate declined', `Project estimate has been declined.`);
        this.dialogRef.close(estimate);

      } else if (this.data.declineSource === DeclineSource.FromFinalProposal) {
        const proposal = await this.projectService.declineProposal(this.data.payload.project.id, value).toPromise();
        this.alertService.alert('Proposal declined', `Project proposal has been declined.`);
        this.dialogRef.close(proposal);
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.isSaving = false;
    }
  }
}
