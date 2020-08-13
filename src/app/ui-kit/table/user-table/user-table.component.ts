import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

import { Customer } from '../../../core/models/auth';
import { TableColumn } from '../../../core/models/table';
import { CustomerService } from '../../../core/services/customer.service';
import { PageSizeSmall } from '../../../core/models/paginator';

@Component({
  selector: 'job-hub-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Output() selectUser: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('imageColumn', {static: true}) imageColumn: TemplateRef<any>;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('projectColumn', {static: true}) projectColumn: TemplateRef<any>;
  @ViewChild('creatorColumn', {static: true}) creatorColumn: TemplateRef<any>;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('statusColumn', {static: true}) statusColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  isLoading = false;
  skip = 0;
  take = PageSizeSmall;
  total = 0;
  users: Customer[] = [];
  filter$: Subject<any> = new Subject<any>();

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
    const queryParams = this.route.snapshot.queryParams || {};
    this.skip = queryParams.skip || 0;
    this.take = queryParams.take || PageSizeSmall;
  }

  ngOnInit(): void {
    this.columns = [
      {templateRef: this.imageColumn, width: '60px'},
      {label: 'Name', templateRef: this.nameColumn, width: '40%'},
      {label: 'Projects', templateRef: this.projectColumn, width: '200px'},
      {label: 'Joined', templateRef: this.dateColumn},
      {label: 'Status', templateRef: this.statusColumn, width: '150px'},
      // {templateRef: this.actionColumn, width: '50px'},
    ];

    this.loadCustomers();
  }

  private async loadCustomers() {
    try {
      this.isLoading = true;
      this.filter$.next({ skip: this.skip, take: this.take });
      const res = await this.customerService.getCustomers(this.skip, this.take).toPromise();
      this.users = res.data;
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
    this.loadCustomers();
  }

}
