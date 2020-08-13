import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';

import { parseToCalendarEvent } from '../../core/utils/calendar.util';
import { ScheduleService } from '../../core/services/schedule.service';
import { ScheduleStatus, ScheduleType } from '../../core/models/schedule';
import { enumToOptions } from '../../core/utils/enum.util';

@Component({
  selector: 'job-hub-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  CalendarView = CalendarView;
  view = CalendarView.Month;
  events: CalendarEvent[] = [];
  viewDate = new Date();
  isLoading = false;
  type: ScheduleType = null;
  scheduleStatusOptions = enumToOptions<ScheduleStatus>(ScheduleStatus);

  constructor(
    private scheduleService: ScheduleService
  ) {
  }

  ngOnInit(): void {
    this.changeViewDate(this.viewDate);
  }

  changeViewDate(date: Date) {
    if (this.view === CalendarView.Month) {
      const from = startOfMonth(this.viewDate).toISOString();
      const to = endOfMonth(this.viewDate).toISOString();
      this.loadSchedule(from, to);
    } else {
      const from = startOfDay(this.viewDate).toISOString();
      const to = endOfDay(this.viewDate).toISOString();
      this.loadSchedule(from, to);
    }
  }

  changeView(view: CalendarView) {
    this.view = view;
    this.changeViewDate(this.viewDate);
  }

  private async loadSchedule(from: string, to: string) {
    try {
      this.isLoading = true;
      const schedule = await this.scheduleService.query(from, to, null, false, this.type).toPromise();
      this.events = schedule.map(x => parseToCalendarEvent(x, true));
    } catch (e) {
    } finally {
      this.isLoading = false;
    }
  }

}
