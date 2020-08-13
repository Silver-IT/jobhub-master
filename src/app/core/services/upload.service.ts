import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  upload(file): Observable<string> {
    const url = `${environment.api}/upload`;
    const form = new FormData();
    form.append('file', file);
    return this.http.post(url, form).pipe(map((res: {url: string}) => res.url));
  }
}
