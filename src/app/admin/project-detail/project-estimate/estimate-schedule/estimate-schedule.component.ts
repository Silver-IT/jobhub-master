import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfMonth, startOfMonth } from 'date-fns';

import { ScheduleService } from '../../../../core/services/schedule.service';
import { parseToCalendarEvent } from '../../../../core/utils/calendar.util';
import { SiteVisitSchedule } from '../../../../core/models/estimate';
import { Schedule, ScheduleType } from '../../../../core/models/schedule';
import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';

@Component({
  selector: 'job-hub-estimate-schedule',
  templateUrl: './estimate-schedule.component.html',
  styleUrls: ['./estimate-schedule.component.scss']
})
export class EstimateScheduleComponent implements OnInit {

  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  isLoading = false;
  CalendarView = CalendarView;
  viewDate = new Date();
  events: CalendarEvent[] = [];
  skippable = true;
  project = this.projectDetailStateService.project;

  existingSchedules: Schedule[] = [];
  schedule: Schedule = null;
  tempSchedule: Schedule = null;

  constructor(
    private scheduleService: ScheduleService,
    private projectDetailStateService: ProjectDetailStateService,
  ) {
  }

  ngOnInit(): void {
    const schedules = this.projectDetailStateService.project.estimate.siteVisitSchedules || [];
    this.schedule = schedules[0] || null;
    this.tempSchedule = JSON.parse(JSON.stringify(this.schedule)); // store original schedule for editing
    if (this.projectDetailStateService.project.estimate.id && this.schedule && this.schedule.id) {
      this.skippable = false;
    }
    this.changeViewDate(this.viewDate);
  }

  changeViewDate(date: Date) {
    const from = startOfMonth(this.viewDate).toISOString();
    const to = endOfMonth(this.viewDate).toISOString();
    this.loadSchedule(from, to);
  }

  scheduleChanged(schedule: SiteVisitSchedule) {
    if (schedule) {
      this.tempSchedule = JSON.parse(JSON.stringify(schedule));
    } // when existing item is deleted, it should be handled in handleScheduleForCurrentEstimate function
    this.handleScheduleForCurrentEstimate(!schedule);
  }

  submit() {
    const estimate = {...this.projectDetailStateService.estimate, siteVisitSchedules: this.schedule ? [this.schedule] : []};
    this.projectDetailStateService.setEstimate(estimate);
    this.next.emit();
  }

  private async loadSchedule(from: string, to: string) {
    try {
      this.isLoading = true;
      this.existingSchedules = await this.scheduleService.query(from, to, null).toPromise();
      this.handleScheduleForCurrentEstimate();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  private handleScheduleForCurrentEstimate(scheduleDeleted = false) {
    let events = [];
    if (this.projectDetailStateService.project.estimate.id) {
      if (scheduleDeleted) {
        const index = this.existingSchedules.findIndex(x => x.id === (this.tempSchedule ? this.tempSchedule.id : null));
        if (index >= 0) {
          this.existingSchedules.splice(index, 1);
        }
        events = this.existingSchedules.map(x => parseToCalendarEvent(x));
        this.tempSchedule = null;
      } else {
        events = this.existingSchedules.filter(x => x.id !== (this.schedule ? this.schedule.id : null)).map(x => parseToCalendarEvent(x));
      }
    } else {
      events = this.existingSchedules.map(x => parseToCalendarEvent(x));
    }
    if (this.schedule) {
      this.events = [
        ...events,
        parseToCalendarEvent({
          ...this.schedule,
          type: ScheduleType.SiteVisitSchedule,
          data: { name: this.project.name, id: this.project.id }
        }, true, true)
      ];
    } else {
      this.events = [...events];
    }
  }
}
