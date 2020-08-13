import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableColumn } from '../../../../core/models/table';
import { NetworkContractor, NetworkContractorCategory } from '../../../../core/models/network-contractor';
import { PageSizeSmall } from '../../../../core/models/paginator';
import { NetworkContractorService } from '../../../../core/services/network-contractor.service';

@Component({
  selector: 'job-hub-contractor-table',
  templateUrl: './contractor-table.component.html',
  styleUrls: ['./contractor-table.component.scss']
})
export class ContractorTableComponent implements OnInit {

  @Input() readonly = false;
  @Output() selectContractor: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('imageColumn', {static: true}) imageColumn: TemplateRef<any>;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('categoryColumn', {static: true}) categoryColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  categories: NetworkContractorCategory[];
  dictCategory: {};
  contractors: NetworkContractor[] = [];
  isLoading: boolean;
  take = PageSizeSmall;
  total = 0;
  skip = 0;

  constructor(
    private networkContractorService: NetworkContractorService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {templateRef: this.imageColumn, width: '60px'},
      {label: 'Company', templateRef: this.nameColumn, width: '40%'},
      {label: 'Category', templateRef: this.categoryColumn},
      // {templateRef: this.actionColumn, width: '50px'},
    ];
    this.loadContractors();
  }

  private async loadContractors() {
    try {
      if (!Boolean(this.categories)) {
        await this.loadCategories();
      }
      this.isLoading = true;
      const res = await this.networkContractorService.getContractors(this.skip, this.take).toPromise();
      this.total = res.count;
      this.contractors = res.data;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadCategories() {
    try {
      this.isLoading = true;
      const res = await this.networkContractorService.getCategories(0, 100).toPromise();
      this.categories = res.data;
      this.dictCategory = {};
      this.categories.forEach(category => this.dictCategory[category.id] = category.name);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContractors();
  }

}
