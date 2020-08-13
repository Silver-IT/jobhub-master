import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES } from '../../../core/data/routes';
import { Event } from '../../../core/models/event';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'job-hub-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss']
})
export class NotificationBoxComponent implements OnInit {

  @Input() events: Event[] = [];
  @Input() isLoading: boolean;
  @Output() closeBox: EventEmitter<any> = new EventEmitter<any>();

  ROUTES = ROUTES;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  navigateToNotificationsPage() {
    this.router.navigate([ROUTES.common.notifications], {relativeTo: this.route});
    this.closeBox.emit();
  }

  async removeEvent(id: string) {
    await this.eventService.readEvent(id).toPromise();
    this.eventService.removeEvent(id);
  }

  readEvent(id: string) {
    this.eventService.readEvent(id).toPromise();
  }

  async readAll() {
    try {
      await this.eventService.readAllEvents().toPromise();
    } catch (e) {
      console.log(e);
    }
  }

}
