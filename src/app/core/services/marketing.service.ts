import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PageName, PageVisitHistory } from '../models/page-name';
import { PageVisitOverview, SessionCount } from '../models/marketing';
import { DEFAULT_FILTER_FROM_DATE, DEFAULT_FILTER_TO_DATE, TimeUnit } from '../models/base';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(
    private http: HttpClient
  ) { }

  pageVisit(page: PageName, id?: string, sub?: string): Promise<string> {
    return new Promise<string>((resolve) => {
      this.logPageVisit(page, id, sub).toPromise()
        .then(res => resolve(res.id))
        .catch(err => resolve(null));
    });
  }

  getPageVisitOverview(): Observable<PageVisitOverview[]> {
    const url = `${environment.api}/marketing/page-visit`;
    return this.http.get<PageVisitOverview[]>(url);
  }

  getSessionCount(unit: TimeUnit, from = DEFAULT_FILTER_FROM_DATE, to = DEFAULT_FILTER_TO_DATE): Observable<SessionCount[]> {
    const url = `${environment.api}/marketing/session-count`;
    let params = new HttpParams();
    params = params.append('unit', unit);
    params = params.append('from', from);
    params = params.append('to', to);
    return this.http.get<SessionCount[]>(url, { params });
  }

  getProjects(): Observable<Project[]> {
    const url = `${environment.api}/marketing/projects`;
    return this.http.get<Project[]>(url);
  }

  private logPageVisit(page: PageName, id?: string, sub?: string): Observable<PageVisitHistory> {
    const url = `${environment.api}/marketing/page-visit`;
    const payload: any = { page };
    if (id) {
      payload.id = id;
    }
    if (sub) {
      payload.sub = sub;
    }
    return this.http.post<PageVisitHistory>(url, payload);
  }
}
