import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Idea, MaterialType } from '../models/idea-board';
import { ProjectAccessoryType } from '../models/project';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class IdeaBoardService {

  static buildIdeaFilter(skip: number, take: number, projectType?: ProjectAccessoryType, materialType?: MaterialType) {
    let params = new HttpParams();
    params = params.append('skip', String(skip))
      .append('take', String(take));
    if (projectType && projectType !== 'null' as any) {
      params = params.append('projectType', projectType);
    }
    if (materialType) {
      params = params.append('materialType', materialType);
    }
    return params;
  }

  constructor(
    private http: HttpClient
  ) { }

  getIdeas(skip: number, take: number, projectType?: ProjectAccessoryType, materialType?: MaterialType): Observable<Idea[]> {
    const url = `${environment.api}/idea-board/all`;
    const params = IdeaBoardService.buildIdeaFilter(skip, take, projectType, materialType);
    return this.http.get<Idea[]>(url, {params});
  }

  getIdeasByBlock(blockCount = 1, projectType?: ProjectAccessoryType): Observable<Idea[]> {
    const url = `${environment.api}/idea-board/as-block`;
    let params = new HttpParams();
    params = params.append('count', String(blockCount));
    if (projectType && projectType !== 'null' as any) {
      params = params.append('projectType', projectType);
    }
    return this.http.get<Idea[]>(url, { params });
  }

  getCustomerBoard(skip: number, take: number, projectType?: ProjectAccessoryType, materialType?: MaterialType): Observable<Idea[]> {
    const url = `${environment.api}/idea-board`;
    const params = IdeaBoardService.buildIdeaFilter(skip, take, projectType, materialType);
    return this.http.get<Idea[]>(url, {params});
  }

  getIdeaBoardByCustomerId(id: string): Observable<Idea[]> {
    const url = `${environment.api}/idea-board/customer/${id}`;
    return this.http.get<Idea[]>(url);
  }

  editIdea(id: string, payload: Idea): Observable<Idea> {
    const url = `${environment.api}/idea-board/${id}`;
    return this.http.put<Idea>(url, payload);
  }

  bulkAdd(payload: { files: Idea[] }): Observable<Idea[]> {
    const url = `${environment.api}/idea-board`;
    return this.http.post<Idea[]>(url, payload);
  }

  deleteIdea(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/idea-board/${id}`;
    return this.http.delete<SuccessResponse>(url);
  }

  likeIdea(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/idea-board/${id}/like`;
    return this.http.post<SuccessResponse>(url, null);
  }

  dislikeIdea(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/idea-board/${id}/dislike`;
    return this.http.post<SuccessResponse>(url, null);
  }
}
