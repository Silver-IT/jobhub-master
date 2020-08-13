import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Schedule, ScheduleDuration, ScheduleType } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.scss']
})
export class TimeRangePickerComponent implements OnInit {

  ScheduleDuration = ScheduleDuration;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {scheduleType: ScheduleType, selectedDate: Date, events: Schedule[]}
  ) { }

  ngOnInit(): void {
  }

}
