import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addMinutes, endOfDay, isToday, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';

import { ScheduleDuration, ScheduleTimeSlot, ScheduleType } from '../../../core/models/schedule';
import { getTimeSlots } from '../../../core/utils/scheduler.util';
import { ScheduleService } from '../../../core/services/schedule.service';

@Component({
  selector: 'job-hub-time-slot-picker',
  templateUrl: './time-slot-picker.component.html',
  styleUrls: ['./time-slot-picker.component.scss']
})
export class TimeSlotPickerComponent implements OnInit, OnDestroy {

  selectedDate: Date;
  schedule;
  slots = [];
  isLoading = false;
  timeOptions = [];

  private unsubscribeAll$ = new Subject<any>();

  constructor(
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: {
      selectedDate: Date,
      selectedType: ScheduleType,
      duration: ScheduleDuration,
      allowOnlyPassed: boolean
    },
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
    this.selectedDate = this.data.selectedDate;
    this.loadSchedules();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  private async loadSchedules() {
    try {
      this.isLoading = true;
      const start = startOfDay(this.selectedDate);
      const end = endOfDay(this.selectedDate);
      const schedules = await this.scheduleService.query(start.toISOString(), end.toISOString(), null, true).toPromise();
      let slots = getTimeSlots(this.data.selectedType, this.selectedDate || new Date(), this.data.duration, this.data.allowOnlyPassed);
      if (this.data.selectedType === ScheduleType.SiteVisitSchedule) { // filter slots by schedules from the API only for site visit schedule
        slots = this.filterSlotsBySchedules(slots, schedules);
      }
      this.slots = slots;
      this.timeOptions = [{ value: null, label: 'Select Time Slot' }, ...this.slots.map(slot => ({
        label: `${this.datePipe.transform(slot.from, 'hh:mm:a')} - ${this.datePipe.transform(slot.to, 'hh:mm:a')}`,
        value: slot.from
      }))];
    } catch (e) {
      console.log('Failed to load slots');
    } finally {
      this.isLoading = false;
    }
  }

  private filterSlotsBySchedules(slots: ScheduleTimeSlot[], schedules: { from: string, to: string }[]) {
    return slots.filter(slot => {
      return !Boolean(schedules.find(schedule => {
        const from = new Date(schedule.from);
        const to = new Date(schedule.to);
        return (slot.from <= from && slot.to > from) || (slot.from >= from && slot.to <= to) || (slot.from < to && slot.to >= to);
      }));
    });
  }

  private filterSlotsForToday(slots: ScheduleTimeSlot[]) {
    if (isToday(this.selectedDate)) {
      return slots.filter(slot => {
        const now = new Date();
        return (slot.from >= now) || (slot.to >= addMinutes(now, 30));
      });
    } else {}
    return slots;
  }
}
