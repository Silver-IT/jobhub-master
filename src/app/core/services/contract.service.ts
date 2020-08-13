import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PageSizeDefault, Paginator } from '../models/paginator';
import { paginatorParam } from '../utils/paginator.util';
import { Project, ProjectDetail } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private http: HttpClient
  ) {
  }

  signContract(projectId: string): Observable<ProjectDetail> {
    const url = `${environment.api}/project/${projectId}/sign-contract`;
    return this.http.post<ProjectDetail>(url, null);
  }

  getContractSignedProjectsByCustomer(userId: string, skip = 0, take = PageSizeDefault): Observable<Paginator<Project>> {
    const url = `${environment.api}/customer/${userId}/contracts`;
    return this.http.get<Paginator<Project>>(url, { params: paginatorParam(skip, take) });
  }
}
