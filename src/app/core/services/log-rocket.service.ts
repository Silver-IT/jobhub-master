import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LogRocketRecording } from '../models/log-rocket-recording';
import { paginatorParam } from '../utils/paginator.util';
import { Paginator } from '../models/paginator';
import * as LogRocket from 'logrocket';

@Injectable({
  providedIn: 'root'
})
export class LogRocketService {

  constructor(
    private http: HttpClient
  ) { }

  async saveSession(recordingId: string, email?: string) {
    try {
      await this.saveLogRocketSession(recordingId, email).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  login(idOrToken: any, name?: string, email?: string) {
    if (name && email) {
      LogRocket.identify(idOrToken, {
        name,
        email,
        subscriptionType: 'pro'
      });
    } else {
      LogRocket.identify(idOrToken.id, {
        name: idOrToken.email,
        email: idOrToken.email,
        subscriptionType: 'pro'
      });
    }
    // tslint:disable
    const recordingId = LogRocket['recordingID'];
    const initialized = LogRocket['_isInitialized'];
    if (recordingId && initialized) {
      this.saveSession(recordingId, email || idOrToken.email);
    }
  }

  saveLogRocketSession(recordingId: string, email?: string): Observable<LogRocketRecording> {
    const url = `${environment.api}/log-rocket`;
    const payload: any = { recordingId };
    if (email) {
      payload.email = email;
    }
    return this.http.post<LogRocketRecording>(url, payload);
  }

  getRecordings(skip = 0, take = 5, authorized?: string, resolved?: string, email?: string): Observable<Paginator<LogRocketRecording>> {
    const url = `${environment.api}/log-rocket/all`;
    let params = paginatorParam(skip, take);
    if (authorized === 'true' || authorized === 'false') {
      params = params.append('authorized', String(authorized));
    }
    if (resolved === 'true' || resolved === 'false') {
      params = params.append('resolved', String(resolved));
    }
    if (email) {
      params = params.append('email', email);
    }
    return this.http.get<Paginator<LogRocketRecording>>(url, { params });
  }

  markAsResolved(id: string, isResolved: boolean): Observable<LogRocketRecording> {
    const url = `${environment.api}/log-rocket/${isResolved ? 'resolve' : 'unresolve'}/${id}`;
    return this.http.post<LogRocketRecording>(url, null);
  }
}
