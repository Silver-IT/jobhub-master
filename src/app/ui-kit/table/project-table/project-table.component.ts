import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import {
  FilterProjects,
  Project,
  ProjectDetail,
  ProjectStatusFilterType
} from '../../../core/models/project';
import { SortByDateType } from '../../../core/models/base';
import { TableColumn } from '../../../core/models/table';
import { PageSizeSmall } from '../../../core/models/paginator';
import { ProjectService } from '../../../core/services/project.service';
import { CustomerService } from '../../../core/services/customer.service';
import { TableComponent } from '../table.component';
import { AlertService } from '../../alert/alert.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit, OnDestroy {

  @Input() dateField = 'updatedAt';
  @Input() dateLabel = 'Update';
  @Input() hasCreatorColumn;
  @Input() hasActionColumn;
  @Input() customerId: string;
  @Input() filterFormChanged$: Observable<FilterProjects>;
  @Output() selectProject: EventEmitter<any> = new EventEmitter<any>();
  @Output() consultationRequired: EventEmitter<any> = new EventEmitter<any>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('imageColumn', { static: true }) imageColumn: TemplateRef<any>;
  @ViewChild('nameColumn', { static: true }) nameColumn: TemplateRef<any>;
  @ViewChild('creatorColumn', { static: true }) creatorColumn: TemplateRef<any>;
  @ViewChild('statusColumn', { static: true }) statusColumn: TemplateRef<any>;
  @ViewChild('dateColumn', { static: true }) dateColumn: TemplateRef<any>;
  @ViewChild('actionColumn', { static: true }) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  isLoading = false;
  total = 0;
  skip = 0;
  take = PageSizeSmall;
  projects: Project[] = [];
  contractorId: string = null;
  sortByDate = SortByDateType.MostRecent;
  status = ProjectStatusFilterType.All;
  projectType = null;
  filter$: Subject<any> = new Subject<any>();

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private customerService: CustomerService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) {
    const queryParams = this.route.snapshot.queryParams || {};
    this.skip = queryParams.skip || 0;
    this.take = queryParams.take || PageSizeSmall;
  }

  ngOnInit(): void {
    this.columns = [
      { templateRef: this.imageColumn, width: '60px' },
      { label: 'Project Name', templateRef: this.nameColumn, width: '40%' },
      { label: this.dateLabel, templateRef: this.dateColumn, width: '150px' },
      { label: 'Status', name: '', templateRef: this.statusColumn, width: '20%' },
    ];
    if (this.hasCreatorColumn) {
      this.columns.splice(3, 0, { label: 'Creator', templateRef: this.creatorColumn, width: '15%' });
    }
    if (this.hasActionColumn) {
      this.columns.splice(this.columns.length, 0, { label: '', name: '', templateRef: this.actionColumn, width: '40px' });
    }

    this.loadProjects();

    if (this.filterFormChanged$) {
      this.filterFormChanged$.pipe(
        takeUntil(this.unsubscribeAll)
      ).subscribe(value => {
        this.skip = 0;
        this.projects = [];
        this.contractorId = value.contractorId;
        this.sortByDate = value.sortByDate;
        this.status = value.status;
        this.projectType = value.projectType;
        this.table.paginator.pageIndex = 0;
        this.loadProjects();
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  clickProject(project: ProjectDetail): void {
    if (project.patioPackageProject) {
      this.consultationRequired.emit();
    } else {
      this.selectProject.emit(project.id);
    }
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadProjects();
  }

  private async loadProjects() {
    try {
      this.isLoading = true;
      let res;
      if (this.customerId) {
        res = await this.customerService.getProjectsByCustomerId(this.customerId, this.skip, this.take).toPromise();
      } else {
        this.filter$.next({
          skip: this.skip,
          take: this.take,
          contractorId: this.contractorId,
          sortByDate: this.sortByDate,
          status: this.status,
          projectType: this.projectType
        });
        res = await this.projectService.getProjects(this.skip, this.take, this.contractorId, this.sortByDate, this.status, this.projectType).toPromise();
      }
      this.projects = res.data;
      this.total = res.count;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async deleteProject(project: Project) {
    this.alertService.confirmDelete().pipe(filter(res => !!res)).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.projectService.deleteProjectById(project.id).toPromise();
        await this.loadProjects();
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to remove project. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }
}
