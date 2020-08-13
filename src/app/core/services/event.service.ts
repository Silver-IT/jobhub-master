import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Event, EventPagination } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  total: number;
  events: Event[];

  total$: BehaviorSubject<number> = new BehaviorSubject<number>(this.total);
  events$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>(this.events);

  constructor(
    private http: HttpClient,
  ) { }

  getEvents(): Observable<EventPagination> {
    const url = `${environment.api}/event/all`;
    return this.http.get<EventPagination>(url).pipe(
      tap(res => {
        this.events = res.events;
        this.total = res.total;
        this.events$.next(this.events);
        this.total$.next(this.total);
      })
    );
  }

  readEvent(id: string): Observable<any> {
    const url = `${environment.api}/event/${id}/read`;
    return this.http.post(url, null).pipe(
      tap(res => {
        if (res && res.success) {
          const event = this.events.find(x => x.id === id);
          if (event) {
            event.readAt = new Date().toISOString();
            this.events$.next(this.events);
            this.total--;
            this.total$.next(this.total);
          }
        }
      })
    );
  }

  readAllEvents(): Observable<any> {
    const url = `${environment.api}/event/read/all`;
    return this.http.post(url, null).pipe(
      tap(res => {
        if (res && res.success) {
          this.events = [];
          this.total = 0;
          this.total$.next(this.total);
          this.events$.next(this.events);
        }
      })
    );
  }

  removeEvent(id: string) {
    const index = this.events.findIndex(x => x.id === id);
    if (index >= 0) {
      this.events.splice(index, 1);
      this.events$.next(this.events);
    }
  }

  addEvent(event: Event) {
    this.events.unshift(event);
    this.total++;
    this.events$.next(this.events);
    this.total$.next(this.total);
  }
}
