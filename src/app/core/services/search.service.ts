import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SearchResult } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clear$: Subject<any> = new Subject<any>();

  keyword: string;
  search$: BehaviorSubject<string> = new BehaviorSubject<string>(this.keyword);

  constructor(
    private http: HttpClient
  ) {
  }

  keywordChange(keyword: string) {
    this.keyword = keyword;
    this.search$.next(this.keyword);
  }

  search(keyword: string): Observable<SearchResult> {
    const url = `${environment.api}/search`;
    return this.http.post<SearchResult>(url, {keyword});
  }
}
