import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User, UserRole } from '../models/auth';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  changeRole(id: string, role: UserRole): Observable<User> {
    const url = `${environment.api}/user/${id}/change-role`;
    return this.http.put<User>(url, {role});
  }

  invite(payload: any): Observable<User> {
    const url = `${environment.api}/user/invite`;
    return this.http.post<User>(url, payload);
  }

  sendInvitation(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/customer/${id}/send-invitation`;
    return this.http.post<SuccessResponse>(url, null);
  }

  remove(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/user/${id}`;
    return this.http.delete<SuccessResponse>(url);
  }
}
