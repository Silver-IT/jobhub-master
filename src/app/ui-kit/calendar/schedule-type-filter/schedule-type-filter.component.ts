import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduleType } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-schedule-type-filter',
  templateUrl: './schedule-type-filter.component.html',
  styleUrls: ['./schedule-type-filter.component.scss']
})
export class ScheduleTypeFilterComponent implements OnInit {

  @Input() type: ScheduleType;
  @Output() typeChange: EventEmitter<ScheduleType> = new EventEmitter<ScheduleType>();

  ScheduleType = ScheduleType;

  constructor() { }

  ngOnInit(): void {
  }

  select(type: ScheduleType) {
    this.type = type;
    this.typeChange.emit(this.type);
  }

}
