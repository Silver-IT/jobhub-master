import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { MaterialOrderGroup, MaterialRequestItem } from '../models/material';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(
    private http: HttpClient
  ) { }

  getMaterialRequests(projectId: string): Observable<MaterialRequestItem[]> {
    const url = `${environment.api}/${projectId}/material`;
    return this.http.get<MaterialRequestItem[]>(url);
  }

  getMaterialOrders(projectId: string): Observable<MaterialOrderGroup[]> {
    const url = `${environment.api}/${projectId}/material-order`;
    return this.http.get<MaterialOrderGroup[]>(url);
  }

  saveMaterialRequests(projectId: string, payload: MaterialRequestItem[]): Observable<MaterialRequestItem[]> {
    const url = `${environment.api}/${projectId}/material`;
    return this.http.post<MaterialRequestItem[]>(url, payload);
  }

  saveMaterialOrders(projectId: string, payload: MaterialOrderGroup[]): Observable<MaterialOrderGroup[]> {
    const url = `${environment.api}/${projectId}/material-order`;
    return this.http.post<MaterialOrderGroup[]>(url, payload);
  }

  schedulePickPavers(projectId: string, from: string, to: string): Observable<Schedule> {
    const url = `${environment.api}/project/${projectId}/schedule-pick-pavers`;
    return this.http.post<Schedule>(url, { from, to });
  }
}
