import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Applicant, Job } from '../models/hiring';
import { PageSizeSmall, Paginator } from '../models/paginator';
import { paginatorParam } from '../utils/paginator.util';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  constructor(
    private http: HttpClient
  ) {
  }

  getJobs(skip = 0, take = PageSizeSmall): Observable<Paginator<Job>> {
    const url = environment.api + '/job/all';
    return this.http.get<Paginator<Job>>(url, {params: paginatorParam(skip, take)});
  }

  getJobById(id: string): Observable<Job> {
    const url = `${environment.api}/job/${id}`;
    return this.http.get<Job>(url);
  }

  getApplicants(skip = 0, take = PageSizeSmall): Observable<Paginator<Applicant>> {
    const url = environment.api + '/job/applicant/all';
    return this.http.get<Paginator<Applicant>>(url, {params: paginatorParam(skip, take)});
  }

  applyJob(jobId: string, payload: Applicant): Observable<Applicant> {
    const url = environment.api + `/job/${jobId}/apply`;
    return this.http.post<Applicant>(url, payload);
  }

  addJob(payload: Job): Observable<Job> {
    const url = `${environment.api}/job`;
    return this.http.post<Job>(url, payload);
  }

  updateJob(id: string, payload: Job): Observable<Job> {
    const url = `${environment.api}/job/${id}`;
    return this.http.put<Job>(url, payload);
  }

  deleteJob(id: string): Observable<any> {
    const url = `${environment.api}/job/${id}`;
    return this.http.delete(url);
  }
}

