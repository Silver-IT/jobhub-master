import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Schedule, ScheduleType } from '../../../core/models/schedule';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'job-hub-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {

  @Input() schedule: Schedule;
  @Input() index: number;

  ScheduleType = ScheduleType;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  navigateToDetail() {
    this.commonService.scheduleItemRedirect(this.schedule);
  }

}
