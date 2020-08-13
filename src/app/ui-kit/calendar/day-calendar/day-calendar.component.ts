import { Component, Input, OnInit } from '@angular/core';

import { Schedule, ScheduleType } from '../../../core/models/schedule';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'job-hub-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {

  @Input() events = [];
  @Input() viewDate;

  ScheduleType = ScheduleType;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  eventClicked(e: Schedule) {
    this.commonService.scheduleItemRedirect(e);
  }

}
