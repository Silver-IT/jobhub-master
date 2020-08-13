import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Applicant } from '../../../../core/models/hiring';
import { TableColumn } from '../../../../core/models/table';
import { HiringService } from '../../../../core/services/hiring.service';
import { PageSizeSmall } from '../../../../core/models/paginator';

@Component({
  selector: 'job-hub-applicant-table',
  templateUrl: './applicant-table.component.html',
  styleUrls: ['./applicant-table.component.scss']
})
export class ApplicantTableComponent implements OnInit {

  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('emailColumn', {static: true}) emailColumn: TemplateRef<any>;
  @ViewChild('phoneColumn', {static: true}) phoneColumn: TemplateRef<any>;
  @ViewChild('cvColumn', {static: true}) cvColumn: TemplateRef<any>;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  applicants: Applicant[] = [];
  isLoading: boolean;
  skip = 0;
  take = PageSizeSmall;
  total = 0;

  constructor(
    private hiringService: HiringService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {label: 'Name', templateRef: this.nameColumn, width: '20%'},
      {label: 'Email', templateRef: this.emailColumn, width: '20%'},
      {label: 'Phone', templateRef: this.phoneColumn},
      {label: '', templateRef: this.cvColumn, width: '200px'},
      {templateRef: this.dateColumn, width: '150px'},
      // {templateRef: this.actionColumn, width: '50px'},
    ];

    this.loadApplicants();
  }

  private async loadApplicants() {
    try {
      this.isLoading = true;
      const res = await this.hiringService.getApplicants(this.skip, this.take).toPromise();
      this.applicants = res.data;
      this.total = res.count;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadApplicants();
  }

}
