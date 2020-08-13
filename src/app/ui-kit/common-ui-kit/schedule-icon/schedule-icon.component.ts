import { Component, Input, OnInit } from '@angular/core';

import { Schedule, ScheduleType } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-schedule-icon',
  templateUrl: './schedule-icon.component.html',
  styleUrls: ['./schedule-icon.component.scss']
})
export class ScheduleIconComponent implements OnInit {

  @Input() color: string;
  @Input() schedule: Schedule;
  @Input() size = 24;

  ScheduleType = ScheduleType;

  constructor() { }

  ngOnInit(): void {
  }

}
