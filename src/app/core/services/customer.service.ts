import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Customer, CustomerRegisterPayload, LoginResponse, User } from '../models/auth';
import { PageSizeSmall, Paginator } from '../models/paginator';
import { paginatorParam } from '../utils/paginator.util';
import { Project } from '../models/project';
import { CustomerPageVisitHistory, InviteCustomerPayload } from '../models/customer';
import { PageName } from '../models/page-name';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(payload: CustomerRegisterPayload): Observable<LoginResponse> {
    const url = `${environment.api}/customer/register`;
    return this.http.post<LoginResponse>(url, payload);
  }

  getCustomers(skip = 0, take = PageSizeSmall): Observable<Paginator<Customer>> {
    const url = `${environment.api}/customer/all`;
    return this.http.get<Paginator<Customer>>(url, { params: paginatorParam(skip, take) });
  }

  getCustomerById(id: string): Observable<Customer> {
    const url = `${environment.api}/customer/${id}`;
    return this.http.get<Customer>(url);
  }

  getProjectsByCustomerId(id: string, skip = 0, take = PageSizeSmall): Observable<Project[]> {
    const url = `${environment.api}/customer/${id}/projects`;
    return this.http.get<Project[]>(url, { params: paginatorParam(skip, take) });
  }

  inviteCustomer(payload: InviteCustomerPayload): Observable<{ projects: Project[] }> {
    const url = `${environment.api}/customer/invite`;
    return this.http.post<{ projects: Project[] }>(url, payload);
  }

  customerPageVisit(page: PageName, projectId: string, id?: string): Observable<CustomerPageVisitHistory> {
    const url = `${environment.api}/customer/page/visit`;
    return this.http.post<CustomerPageVisitHistory>(url, { page, projectId, id });
  }

  pageVisit(page: PageName, id: string, sessionId?: string): Promise<string> {
    return new Promise<string>((resolve) => {
      this.customerPageVisit(page, id, sessionId).toPromise()
        .then(res => resolve(res.id))
        .catch(err => resolve(null));
    });
  }

  searchCustomerByEmail(email: string): Observable<User> {
    const url = `${environment.api}/customer/search-by-email`;
    return this.http.post<User>(url, { email });
  }
}
