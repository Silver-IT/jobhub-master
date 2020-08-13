import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AddCalendarEventPayload, Calendar, Schedule, ScheduleType } from '../models/schedule';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  query(from: string, to: string, take = 10, excludeConstructionSchedule = false, type: ScheduleType = null): Observable<Schedule[]> {
    const url = `${environment.api}/schedule`;
    let params = new HttpParams();
    params = params.append('from', from);
    if (to) {
      params = params.append('to', to);
    }
    if (take) {
      params = params.append('take', String(take));
    }
    if (excludeConstructionSchedule && type !== ScheduleType.ProjectStart) {
      params = params.append('excludeConstructionSchedule', String(excludeConstructionSchedule));
    }
    if (type) {
      params = params.append('scheduleType', type);
    }
    return this.http.get<Schedule[]>(url, { params });
  }

  getGoogleCalendars(token: string): Observable<Calendar[]> {
    const url = `${environment.api}/schedule/calendars/${token}`;
    return this.http.get<Calendar[]>(url);
  }

  addGoogleCalendarEvent(token: string, calendarId: string, event: AddCalendarEventPayload): Observable<SuccessResponse> {
    const url = `${environment.api}/schedule/calendars/${token}/${calendarId}`;
    return this.http.post<SuccessResponse>(url, event);
  }

  updateScheduleById(id: string, payload: Schedule): Observable<Schedule> {
    const url = `${environment.api}/schedule/${id}`;
    return this.http.put<Schedule>(url, { type: payload.type, from: payload.from, to: payload.to });
  }

  deleteScheduleById(id: string): Observable<any> {
    const url = `${environment.api}/schedule/${id}`;
    return this.http.delete(url);
  }
}
