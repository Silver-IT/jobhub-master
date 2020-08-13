import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { EventService } from '../../../core/services/event.service';
import { SocketService } from '../../../core/services/socket.service';
import { Event } from '../../../core/models/event';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'job-hub-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent implements OnInit, OnDestroy {

  @ViewChild(NgbDropdown) dropdown: NgbDropdown;
  isLoading = false;
  isOpened = false;

  total$ = this.eventService.total$;
  events$ = this.eventService.events$;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private eventService: EventService,
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    this.socketService.subscribeEvents().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((event: Event) => {
      this.eventService.addEvent(event);
    });
    this.loadAllEvents();
    this.total$.pipe(
      take(2)
    ).subscribe(value => {
      if (value && this.dropdown) {
        this.dropdown.open();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private async loadAllEvents() {
    try {
      this.isLoading = true;
      await this.eventService.getEvents().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  openChanged(opened) {
    this.isOpened = opened;
    if (this.isOpened) {
      this.loadAllEvents();
    }
  }
}
