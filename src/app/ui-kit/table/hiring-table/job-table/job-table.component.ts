import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

import { Job } from '../../../../core/models/hiring';
import { TableColumn } from '../../../../core/models/table';
import { PageSizeSmall } from '../../../../core/models/paginator';
import { HiringService } from '../../../../core/services/hiring.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'job-hub-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.scss']
})
export class JobTableComponent implements OnInit {

  @Output() selectJob: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('titleColumn', {static: true}) titleColumn: TemplateRef<any>;
  @ViewChild('typeColumn', {static: true}) typeColumn: TemplateRef<any>;
  @ViewChild('salaryColumn', {static: true}) salaryColumn: TemplateRef<any>;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  jobs: Job[] = [];
  isLoading = false;
  total = 0;
  skip = 0;
  take = PageSizeSmall;

  constructor(
    private hiringService: HiringService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {label: 'Position Name', templateRef: this.titleColumn, width: '40%'},
      {label: 'Type', templateRef: this.typeColumn, width: '20%'},
      {label: 'Salary', templateRef: this.salaryColumn},
      {templateRef: this.dateColumn, width: '150px'},
      // {templateRef: this.actionColumn, width: '50px'},
    ];

    this.loadJobs();
  }

  private async loadJobs() {
    try {
      this.isLoading = true;
      const res = await this.hiringService.getJobs(this.skip, this.take).toPromise();
      this.jobs = res.data;
      this.total = res.count;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = e.pageIndex * this.take;
    this.loadJobs();
  }

}
