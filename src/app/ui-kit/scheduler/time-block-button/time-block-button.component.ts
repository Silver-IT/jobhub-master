import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ScheduleTimeSlot } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-time-block-button',
  templateUrl: './time-block-button.component.html',
  styleUrls: ['./time-block-button.component.scss']
})
export class TimeBlockButtonComponent implements OnInit {

  @Input() slot: ScheduleTimeSlot;
  @Input() selected: boolean;
  @Output() selectSlot: EventEmitter<ScheduleTimeSlot> = new EventEmitter<ScheduleTimeSlot>();

  constructor() { }

  ngOnInit(): void {
  }

}
