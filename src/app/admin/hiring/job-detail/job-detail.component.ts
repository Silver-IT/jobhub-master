import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { AlertService } from '../../../ui-kit/alert/alert.service';
import { hiringOptions, Job } from '../../../core/models/hiring';
import { HiringService } from '../../../core/services/hiring.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  isLoading = false;
  job: Job = this.route.snapshot.data.job;
  form: FormGroup;
  hiringOptions = hiringOptions;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private hiringService: HiringService,
    private toastr: ToastrService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.buildJobForm();
  }

  private buildJobForm() {
    const data: Job = this.job || {} as any;
    this.form = this.fb.group({
      title: [data.title || '', Validators.required],
      description: [data.description || '', Validators.required],
      type: [data.type || '', Validators.required],
      salary: [data.salary || '', [Validators.required, Validators.min(1)]],
      salaryType: [data.salaryType || '', Validators.required],
      remote: data.remote || false,
      hardSkills: [data.hardSkills || []],
      softSkills: [data.softSkills || []],
    });
  }

  async saveJob() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      payload.salary = Number(payload.salary);
      if (this.job) {
        await this.hiringService.updateJob(this.job.id, this.form.value).toPromise();
      } else {
        await this.hiringService.addJob(this.form.value).toPromise();
      }
      this.toastr.success('Your request has been submitted successfully.');
      this.router.navigate([ROUTES.admin.root, ROUTES.admin.hiring]);
    } catch (e) {
      this.toastr.error(e, 'Sorry, Failed to submit your request. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async deleteJob() {
    this.alert.confirmDelete().pipe(
      filter(value => value)
    ).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.hiringService.deleteJob(this.job.id).toPromise();
        this.toastr.info('Job posting has been closed.');
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.hiring]);
      } catch (e) {
        this.toastr.error(e, 'Sorry, Failed to delete job posting. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }

}
