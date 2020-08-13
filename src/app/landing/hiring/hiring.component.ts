import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { JobApplyDialogComponent } from './job-apply-dialog/job-apply-dialog.component';
import { HiringService } from '../../core/services/hiring.service';
import { Job } from '../../core/models/hiring';

@Component({
  selector: 'job-hub-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent implements OnInit {

  isLoading = false;
  jobs: Job[] = [];

  constructor(
    private dialog: MatDialog,
    private hiringService: HiringService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  openApplyDialog(job: Job) {
    const dialogRef = this.dialog.open(JobApplyDialogComponent, {
      width: '570px',
      closeOnNavigation: true,
      data: job
    });
  }

  private async load() {
    try {
      this.isLoading = true;
      const res = await this.hiringService.getJobs(0, 50).toPromise();
      this.jobs = res.data;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
