import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Schedule } from '../../../core/models/schedule';

@Component({
  selector: 'job-hub-site-visit-schedule-alert',
  templateUrl: './site-visit-schedule-alert.component.html',
  styleUrls: ['./site-visit-schedule-alert.component.scss']
})
export class SiteVisitScheduleAlertComponent implements OnInit {

  @Input() schedule: Schedule;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() reschedule: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
