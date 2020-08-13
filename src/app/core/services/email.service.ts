import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { EmailEvent, EmailLog } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getEmailsByProjectId(id: string): Observable<EmailLog[]> {
    const url = `${environment.api}/project/${id}/emails`;
    return this.http.get<EmailLog[]>(url, {});
  }

  getEmailEventsById(id: string): Observable<EmailEvent[]> {
    const url = `${environment.api}/email/${id}/status`;
    return this.http.get<EmailEvent[]>(url, {});
  }
}
