import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableColumn } from '../../../../core/models/table';
import { NetworkContractorCategory } from '../../../../core/models/network-contractor';
import { NetworkContractorService } from '../../../../core/services/network-contractor.service';
import { PageSizeSmall } from '../../../../core/models/paginator';

@Component({
  selector: 'job-hub-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  @Output() selectCategory: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  columns: TableColumn[];
  take = PageSizeSmall;
  skip = 0;
  total = 0;
  categories: NetworkContractorCategory[] = [];
  isLoading: boolean;

  constructor(
    private networkContractorService: NetworkContractorService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {label: 'Category name', templateRef: this.nameColumn},
      // {templateRef: this.actionColumn, width: '50px'},
    ];
    this.loadCategories();
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadCategories();
  }

  private async loadCategories() {
    try {
      this.isLoading = true;
      const res = await this.networkContractorService.getCategories(this.skip, this.take).toPromise();
      this.total = res.count;
      this.categories = res.data;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
