import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'job-hub-calendar-navigator',
  templateUrl: './calendar-navigator.component.html',
  styleUrls: ['./calendar-navigator.component.scss']
})
export class CalendarNavigatorComponent implements OnInit {

  @Input() view: CalendarView;
  @Input() viewDate: Date;
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  changeDate(date) {
    this.viewDate = date;
    this.viewDateChange.emit(this.viewDate);
  }

}
