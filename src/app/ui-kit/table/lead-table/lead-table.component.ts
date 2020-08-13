import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Lead } from '../../../core/models/lead';
import { TableColumn } from '../../../core/models/table';
import { PageSizeSmall } from '../../../core/models/paginator';
import { getInitialsFromName } from '../../../core/utils/common.util';
import { TableComponent } from '../table.component';
import { LeadService } from '../../../core/services/lead.service';
import { FilterLeads } from '../../../core/models/lead';
import { ArchivedFilterType, SortByDateType } from '../../../core/models/base';
import { AlertService } from '../../alert/alert.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.scss']
})
export class LeadTableComponent implements OnInit, OnDestroy {

  @Input() dateField = 'updatedAt';
  @Input() dateLabel = 'Update';
  @Input() hasActionColumn;
  @Input() customerId: string;
  @Input() filterFormChanged$: Observable<FilterLeads>;
  @Output() selectLead: EventEmitter<any> = new EventEmitter<any>();
  @Output() consultationRequired: EventEmitter<any> = new EventEmitter<any>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('imageColumn', { static: true }) imageColumn: TemplateRef<any>;
  @ViewChild('nameColumn', { static: true }) nameColumn: TemplateRef<any>;
  @ViewChild('phoneColumn', { static: true }) phoneColumn: TemplateRef<any>;
  @ViewChild('emailColumn', { static: true }) emailColumn: TemplateRef<any>;
  @ViewChild('addressColumn', { static: true }) addressColumn: TemplateRef<any>;
  @ViewChild('dateColumn', { static: true }) dateColumn: TemplateRef<any>;
  @ViewChild('actionColumn', { static: true }) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  isLoading = false;
  total = 0;
  skip = 0;
  take = PageSizeSmall;
  sortByDate = SortByDateType.MostRecent;
  archivedType = ArchivedFilterType.Active;
  leads: Lead[] = [];
  filter$: Subject<any> = new Subject<any>();

  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor(
    private leadService: LeadService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { templateRef: this.imageColumn, width: '80px' },
      { label: 'Customer Name', templateRef: this.nameColumn, width: '20%' },
      { label: 'Phone Number', templateRef: this.phoneColumn, width: '150px' },
      { label: 'Email Address', templateRef: this.emailColumn, width: '30%' },
      { label: 'Address', name: '', templateRef: this.addressColumn, width: '20%' },
      { label: 'Posted on', name: '', templateRef: this.dateColumn, width: '150px' },
    ];
    if (this.hasActionColumn) {
      this.columns.splice(this.columns.length, 0, { label: '', name: '', templateRef: this.actionColumn, width: '40px' });
    }

    this.loadLeads();

    if (this.filterFormChanged$) {
      this.filterFormChanged$.pipe(
        takeUntil(this.unsubscribeAll$)
      ).subscribe(value => {
        this.skip = 0;
        this.leads = [];
        this.sortByDate = value.sortByDate;
        this.archivedType = value.archivedType;
        this.table.paginator.pageIndex = 0;
        this.loadLeads();
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  clickLead(lead: Lead): void {
    this.selectLead.emit(lead.id);
  }

  archiveLead(lead: Lead): void {
    this.alertService.confirmDelete().pipe(filter(res => !!res)).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.leadService.archiveLeadById(lead.id).toPromise();
        await this.loadLeads();
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to remove project. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadLeads();
  }

  private async loadLeads() {
    try {
      this.isLoading = true;
      this.filter$.next({
        skip: this.skip,
        take: this.take,
        sortByDate: this.sortByDate,
        archivedType: this.archivedType,
      });
      const res = await this.leadService.getLeads(this.skip, this.take, this.sortByDate, this.archivedType).toPromise();
      this.leads = res.data;
      this.leads = this.leads.map(lead => ({...lead, initials: getInitialsFromName(lead.fullName)}));
      this.total = res.count;
    } catch (e) {
      console.log('Failed to load leads');
    } finally {
      this.isLoading = false;
    }
  }

}
