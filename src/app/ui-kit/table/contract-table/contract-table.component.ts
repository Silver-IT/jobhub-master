import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../table.component';
import { TableColumn } from '../../../core/models/table';
import { PageSizeSmall } from '../../../core/models/paginator';
import { ContractService } from '../../../core/services/contract.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'job-hub-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.scss']
})
export class ContractTableComponent implements OnInit {

  @Input() customerId: string;
  @Output() selectContract: EventEmitter<string> = new EventEmitter<string>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('imageColumn', {static: true}) imageColumn: TemplateRef<any>;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('signColumn', {static: true}) signColumn: TemplateRef<any>;

  columns: TableColumn[];
  isLoading = false;
  total = 0;
  skip = 0;
  take = PageSizeSmall;
  projects: Project[] = [];
  contractorId: string = null;

  constructor(
    private contractService: ContractService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {templateRef: this.imageColumn, width: '60px'},
      {label: 'Project Name', templateRef: this.nameColumn, width: '40%'},
      {label: 'Signed', templateRef: this.signColumn, width: '40%'},
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  private async loadContracts() {
    try {
      this.isLoading = true;
      const res = await this.contractService.getContractSignedProjectsByCustomer(this.customerId, this.skip, this.take).toPromise();
      this.projects = res.data;
      this.total = res.count;
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to load contracts. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }
}
