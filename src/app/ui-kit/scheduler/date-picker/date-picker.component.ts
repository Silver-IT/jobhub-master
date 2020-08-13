import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCalendar, NgbDate, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { endOfDay, endOfMonth, getDate, getMonth, getYear, isToday, startOfDay, startOfMonth } from 'date-fns';

import { ScheduleService } from '../../../core/services/schedule.service';
import { Schedule, ScheduleType } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() selectedDate;
  @Input() scheduleType: ScheduleType;
  @ViewChild(NgbDatepicker) datePicker: NgbDatepicker;

  isLoading = false;
  allowOnlyPassedDates = false;
  model;
  date;
  schedules: Schedule[] = [];
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) > 6;
  isPassedDay = (date: NgbDate) => new Date(`${date.year}-${date.month}-${date.day}`) < new Date();
  isToday = (date: NgbDate) => isToday(new Date(`${date.year}-${date.month}-${date.day}`));
  isDisabled = (date: NgbDate) => {
    if (this.scheduleType === ScheduleType.SiteVisitSchedule) {
      if (this.isToday(date)) { return false; }
      return this.allowOnlyPassedDates ? !this.isPassedDay(date) : this.isPassedDay(date);
    } else if (this.scheduleType === ScheduleType.PickOutPaver) {
      return this.isPassedDay(date) || !this.isWeekend(date);
    } else {
      return false;
    }
  }
  hasSchedule = (date: NgbDate) => {
    const dayStart = startOfDay(new Date(`${date.year}-${date.month}-${date.day}`));
    const dayEnd = endOfDay(new Date(`${date.year}-${date.month}-${date.day}`));
    return Boolean(this.schedules.find(schedule => {
      const from = new Date(schedule.from);
      const to = new Date(schedule.to);
      return (dayStart >= from && dayStart < to) || (dayEnd >= from && dayEnd <= to) || (dayStart < from && dayEnd >= to);
    }));
  }

  constructor(
    private calendar: NgbCalendar,
    private scheduleService: ScheduleService,
    @Inject(MAT_DIALOG_DATA) public data: {
      scheduleType: ScheduleType,
      passed: boolean
    }
  ) { }

  ngOnInit(): void {
    this.scheduleType = this.data.scheduleType;
    this.allowOnlyPassedDates = this.data.passed;
    if (this.selectedDate) {
      this.model = {
        year: getYear(this.selectedDate), month: getMonth(this.selectedDate) + 1, day: getDate(this.selectedDate)
      };
    }
  }

  async navigate(e) {
    try {
      this.date = e.next;
      this.isLoading = true;
      const start = startOfMonth(new Date(`${e.next.year}-${e.next.month}-1`)).toISOString();
      const end = endOfMonth(new Date(`${e.next.year}-${e.next.month}-1`)).toISOString();
      this.schedules = await this.scheduleService.query(start, end, null, true).toPromise();
      this.datePicker.focus();
    } catch (e) {
      console.log('Failed to load scheduled items');
    } finally {
      this.isLoading = false;
    }
  }

  selectDate() {
    this.selectedDate = new Date(`${this.model.year}-${this.model.month}-${this.model.day}`);
  }
}
