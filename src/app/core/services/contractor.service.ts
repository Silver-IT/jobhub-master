import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(
    private http: HttpClient
  ) {
  }

  getContractors(): Observable<User[]> {
    const url = `${environment.api}/contractor/all`;
    return this.http.get<User[]>(url, {});
  }
}
