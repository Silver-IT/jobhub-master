import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Lead } from '../models/lead';
import { paginatorParam } from '../utils/paginator.util';
import { PageSizeDefault, Paginator } from '../models/paginator';
import { ArchivedFilterType, SortByDateType } from '../models/base';
import { Project } from '../models/project';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getLeads(skip = 0, take = PageSizeDefault, sortByDate?: SortByDateType, archivedType?: ArchivedFilterType): Observable<Paginator<Lead>> {
    const url = `${environment.api}/lead/all`;
    let params = paginatorParam(skip, take);
    if (sortByDate) {
      params = params.append('sortByDate', sortByDate);
    }
    if (archivedType) {
      params = params.append('archivedType', archivedType);
    }
    return this.http.get<Paginator<Lead>>(url, { params });
  }

  getLeadById(id: string): Observable<Lead> {
    const url = `${environment.api}/lead/${id}`;
    return this.http.get<Lead>(url);
  }

  updateLeadById(id: string, payload: Lead): Observable<Lead> {
    const url = `${environment.api}/lead/${id}`;
    return this.http.put<Lead>(url, payload);
  }

  createProjectFromLead(id: string): Observable<Project> {
    const url = `${environment.api}/project/register-from-lead/${id}`;
    return this.http.post<Project>(url, null);
  }

  archiveLeadById(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/lead/${id}/archive`;
    return this.http.post<SuccessResponse>(url, null);
  }
}
