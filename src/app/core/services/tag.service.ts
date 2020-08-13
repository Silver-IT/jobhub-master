import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TagCategory } from '../models/tag';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient
  ) { }

  searchByKeyword(category: TagCategory, keyword: string): Observable<string[]> {
    const url = `${environment.api}/tag/find/${category}`;
    let params = new HttpParams();
    params = params.append('keyword', keyword);
    return this.http.get<string[]>(url, { params });
  }
}
