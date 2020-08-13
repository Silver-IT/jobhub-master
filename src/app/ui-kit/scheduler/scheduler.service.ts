import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Schedule, ScheduleDuration, ScheduleType } from '../../core/models/schedule';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimeSlotPickerComponent } from './time-slot-picker/time-slot-picker.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';

@Injectable()
export class SchedulerService {

  constructor(
    private dialog: MatDialog
  ) { }

  openFromDatePickerDialog(scheduleType: ScheduleType, passed = false) {
    // passed flag to select only from passed dates
    return this.openDatePickerDialog(scheduleType, passed).pipe(
      switchMap(selectedDate => {
        if (selectedDate) {
          let duration = ScheduleDuration.Minutes60;
          if (scheduleType === ScheduleType.PickOutPaver) {
            duration = ScheduleDuration.Minutes30;
          }
          return this.openTimeSlotPickerDialog(scheduleType, selectedDate, duration, passed).pipe(
            switchMap(timeSlot => {
              if (timeSlot) {
                return of(timeSlot);
              } else {
                return this.openFromDatePickerDialog(scheduleType, passed);
              }
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  openSiteVisitSchedulerFromRangePicker(selectedDate: Date, events: Schedule[] = []) {
    return this.openTimeRangePickerDialog(ScheduleType.SiteVisitSchedule, selectedDate, events).pipe(
      switchMap((duration: ScheduleDuration) => {
        if (duration) {
          return this.openTimeSlotPickerDialog(ScheduleType.SiteVisitSchedule, selectedDate, duration).pipe(
            switchMap(res => {
              if (res) {
                return of(res);
              } else {
                return this.openSiteVisitSchedulerFromRangePicker(selectedDate, events);
              }
            })
          );
        } else {
          return of(duration);
        }
      })
    );
  }

  private openTimeRangePickerDialog(scheduleType: ScheduleType, selectedDate: Date, events: Schedule[]) {
    return this.dialog.open(TimeRangePickerComponent, {
      width: '570px',
      disableClose: true,
      data: { scheduleType, selectedDate, events }
    }).afterClosed();
  }

  private openDatePickerDialog(scheduleType?: ScheduleType, passed = false) {
    return this.dialog.open(DatePickerComponent, {
      width: '570px',
      disableClose: true,
      data: { scheduleType, passed }
    }).afterClosed();
  }

  private openTimeSlotPickerDialog(selectedType: ScheduleType, selectedDate: Date, duration?: ScheduleDuration, allowOnlyPassed?: boolean) {
    return this.dialog.open(TimeSlotPickerComponent, {
      width: '570px',
      disableClose: true,
      data: { selectedType, selectedDate, duration, allowOnlyPassed }
    }).afterClosed();
  }
}
