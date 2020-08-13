import { Component, Input, OnInit } from '@angular/core';
import { Event, EventType } from '../../../core/models/event';

@Component({
  selector: 'job-hub-notification-avatar',
  templateUrl: './notification-avatar.component.html',
  styleUrls: ['./notification-avatar.component.scss']
})
export class NotificationAvatarComponent implements OnInit {

  @Input() event: Event;
  @Input() size = 42;

  EventType = EventType;

  constructor() { }

  ngOnInit(): void {
  }

}
