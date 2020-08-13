import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TableComponent } from '../table.component';
import { TableColumn } from '../../../core/models/table';
import { PageSizeSmall } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { LogRocketService } from '../../../core/services/log-rocket.service';
import { LogRocketRecording } from '../../../core/models/log-rocket-recording';

@Component({
  selector: 'job-hub-log-rocket-table',
  templateUrl: './log-rocket-table.component.html',
  styleUrls: ['./log-rocket-table.component.scss']
})
export class LogRocketTableComponent implements OnInit, OnDestroy {

  @Input() filter$: Subject<any>;
  @Input() email: string;

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('imageColumn', {static: true}) imageColumn: TemplateRef<any>;
  @ViewChild('sessionColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('userColumn', {static: true}) userColumn: TemplateRef<any>;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('resolvedColumn', {static: true}) resolvedColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  isLoading = false;
  total = 0;
  skip = 0;
  take = PageSizeSmall;
  recordings: LogRocketRecording[] = [];

  resolved;
  authorized;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private toastr: ToastrService,
    private logRocketService: LogRocketService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {templateRef: this.imageColumn, width: '40px'},
      // {label: 'Session ID', templateRef: this.nameColumn, width: ''},
      {label: 'User', templateRef: this.userColumn, width: ''},
      {label: 'Status', templateRef: this.resolvedColumn, width: '100px'},
      {label: 'Date', templateRef: this.dateColumn, width: '170px'},
      {label: '', templateRef: this.actionColumn, width: '100px'},
    ];
    this.loadRecordings();
    if (this.filter$) {
      this.filter$.asObservable().pipe(
        takeUntil(this.unsubscribeAll)
      ).subscribe((value: {authorized: boolean, resolved: boolean}) => {
        this.resolved = value.resolved;
        this.authorized = value.authorized;
        this.skip = 0;
        this.total = 0;
        this.recordings = [];
        this.loadRecordings();
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadRecordings();
  }

  async onToggleResolveStatus(isResolved: boolean, id: string) {
    try {
      this.isLoading = true;
      await this.logRocketService.markAsResolved(id, isResolved).toPromise();
    } catch (e) {
      this.toastr.error(e, 'Something went wrong. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private async loadRecordings() {
    try {
      this.isLoading = true;
      const res = await this.logRocketService.getRecordings(this.skip, this.take, this.authorized, this.resolved, this.email).toPromise();
      this.recordings = res.data;
      this.total = res.count;
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to load contracts. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
