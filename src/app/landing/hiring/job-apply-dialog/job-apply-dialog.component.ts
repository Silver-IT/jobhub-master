import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ROUTES } from '../../../core/data/routes';
import { Job } from '../../../core/models/hiring';
import { HiringService } from '../../../core/services/hiring.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { CvUploaderComponent } from '../../../ui-kit/file-uploader/cv-uploader/cv-uploader.component';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'job-hub-job-apply-dialog',
  templateUrl: './job-apply-dialog.component.html',
  styleUrls: ['./job-apply-dialog.component.scss']
})
export class JobApplyDialogComponent implements OnInit {

  @ViewChild(CvUploaderComponent) cvUploader: CvUploaderComponent;

  ROUTES = ROUTES;
  job: Job;
  isSaving = false;

  applyForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', Validators.required],
    phone: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Job,
    private dialogRef: MatDialogRef<JobApplyDialogComponent>,
    private fb: FormBuilder,
    private hiringService: HiringService,
    private alert: AlertService,
    private uploadService: UploadService
  ) {
  }

  ngOnInit(): void {
    this.job = this.data;
  }

  async applyJob() {
    try {
      if (!this.cvUploader.file) {
        this.alert.alert('Job apply', 'Please upload your CV first.');
        return;
      }
      this.isSaving = true;
      const cv = await this.uploadService.upload(this.cvUploader.file.nativeFile).toPromise();
      await this.hiringService.applyJob(this.job.id, {...this.applyForm.value, cv}).toPromise();
      this.dialogRef.close();
      this.alert.alert('Message sent!', 'Your proposal successfully sent and someone will get back to you within 24 hours.');
    } catch (e) {
      this.alert.alert('Something went wrong...', 'We are unable to accept your proposal at the moment. Please try again later.');
    } finally {
      this.isSaving = false;
    }
  }
}
