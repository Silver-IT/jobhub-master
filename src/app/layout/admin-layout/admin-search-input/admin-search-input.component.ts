import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { ROUTES } from '../../../core/data/routes';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'job-hub-admin-search-input',
  templateUrl: './admin-search-input.component.html',
  styleUrls: ['./admin-search-input.component.scss']
})
export class AdminSearchInputComponent implements OnInit, OnDestroy {

  form: FormGroup = this.fb.group({
    search: ''
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.clearWhenExitingSearchPage();
    this.searchKeywordChanged();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private searchKeywordChanged() {
    this.form.get('search').valueChanges.pipe(
      debounceTime(700),
      takeUntil(this.unsubscribeAll)
    ).subscribe(keyword => {
      if (this.router.url.includes(ROUTES.admin.search)) {
        this.searchService.keywordChange(keyword);
      } else {
        if (keyword) {
          this.router.navigate([ROUTES.admin.root, ROUTES.admin.search]);
          this.searchService.keywordChange(keyword);
        }
      }
    });
  }

  private clearWhenExitingSearchPage() {
    this.searchService.clear$.asObservable().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(() => {
      this.form.get('search').reset();
    });
  }

}
