import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { NetworkContractor, NetworkContractorCategory } from '../models/network-contractor';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SuccessResponse } from '../models/success-response';
import { PageSizeSmall, Paginator } from '../models/paginator';
import { paginatorParam } from '../utils/paginator.util';

@Injectable({
  providedIn: 'root'
})
export class NetworkContractorService {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
  }

  getContractors(skip = 0, take = PageSizeSmall): Observable<Paginator<NetworkContractor>> {
    const url = environment.api + '/network-contractor/all';
    return this.http.get<Paginator<NetworkContractor>>(url, {params: paginatorParam(skip, take)});
  }

  getContractorById(id: string): Observable<NetworkContractor> {
    const url = `${environment.api}/network-contractor/${id}`;
    return this.http.get<NetworkContractor>(url);
  }

  getCategories(skip = 0, take = PageSizeSmall): Observable<Paginator<NetworkContractorCategory>> {
    const url = environment.api + '/network-contractor/category/all';
    return this.http.get<Paginator<NetworkContractorCategory>>(url, {params: paginatorParam(skip, take)});
  }

  getCategoryById(id: string): Observable<NetworkContractorCategory> {
    const url = `${environment.api}/network-contractor/category/${id}`;
    return this.http.get<NetworkContractorCategory>(url);
  }

  createContractor(payload: NetworkContractor): Observable<NetworkContractor> {
    const url = `${environment.api}/network-contractor`;
    return this.http.post<NetworkContractor>(url, payload);
  }

  createCategory(payload: NetworkContractorCategory): Observable<NetworkContractorCategory> {
    const url = `${environment.api}/network-contractor/category`;
    return this.http.post<NetworkContractorCategory>(url, payload);
  }

  updateContractorById(id: string, payload: NetworkContractor): Observable<NetworkContractor> {
    const url = `${environment.api}/network-contractor/${id}`;
    return this.http.put<NetworkContractor>(url, payload);
  }

  updateCategoryById(id: string, payload: NetworkContractorCategory): Observable<NetworkContractorCategory> {
    const url = `${environment.api}/network-contractor/category/${id}`;
    return this.http.put<NetworkContractorCategory>(url, payload);
  }

  removeCategoryById(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/network-contractor/category/${id}`;
    return this.http.delete<SuccessResponse>(url);
  }

  removeContractorById(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/network-contractor/${id}`;
    return this.http.delete<SuccessResponse>(url);
  }

  buildContractorForm(contractor: NetworkContractor) {
    const data: NetworkContractor = contractor || null as any;
    return this.fb.group({
      companyName: [data.companyName || '', Validators.required],
      address: [data.address || '', Validators.required],
      contacts: [data.contacts || '', Validators.required],
      website: data.website || '',
      serviceDescription: [data.serviceDescription || '', Validators.required],
      category: [data.category?.id, Validators.required],
      logoUrl: [data.logoUrl || '', Validators.required],
    });
  }

  buildCategoryForm(category: NetworkContractorCategory) {
    const data: NetworkContractorCategory = category || null as any;
    return this.fb.group({
      name: [data.name || '', Validators.required],
      published: data.published || true,
    });
  }
}
