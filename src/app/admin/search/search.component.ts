import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchService } from '../../core/services/search.service';
import { SearchResult } from '../../core/models/search';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'job-hub-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  isLoading = false;
  searchResult: SearchResult = {
    projects: [],
    contractors: [],
    customers: [],
    networkContractors: []
  };
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private searchService: SearchService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.searchService.search$.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(keyword => {
      this.search(keyword);
    });
  }

  ngOnDestroy(): void {
    this.searchService.clear$.next();
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private async search(keyword: string) {
    this.resetSearchResult();
    if (!keyword) {
      return;
    }
    try {
      this.isLoading = true;
      this.searchResult = await this.searchService.search(keyword).toPromise();
    } catch (e) {
      this.toastr.error(e, 'Sorry, something went wrong. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private resetSearchResult() {
    this.searchResult = {
      projects: [],
      contractors: [],
      customers: [],
      networkContractors: []
    };
  }

}
