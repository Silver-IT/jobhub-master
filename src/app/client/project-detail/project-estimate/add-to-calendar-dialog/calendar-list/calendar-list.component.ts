import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Calendar } from '../../../../../core/models/schedule';

@Component({
  selector: 'job-hub-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {

  @Input() calendars: Calendar[] = [];
  @Output() selectCalendar: EventEmitter<Calendar> = new EventEmitter<Calendar>();

  constructor() { }

  ngOnInit(): void {
  }

}
