import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarEventTimesChangedEvent, collapseAnimation } from 'angular-calendar';
import { filter } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { isPast } from 'date-fns';
import { CalendarEvent, MonthViewDay } from 'calendar-utils';

import { SiteVisitSchedule } from '../../../core/models/estimate';
import { SchedulerService } from '../../scheduler/scheduler.service';
import { Schedule, ScheduleTimeSlot, ScheduleType } from '../../../core/models/schedule';
import { ScheduleService } from '../../../core/services/schedule.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { AlertService } from '../../alert/alert.service';
import { OptionLabelPipe } from '../../pipes/option-label.pipe';
import { ConstructionScheduleUpdateDialogComponent } from '../construction-schedule-update-dialog/construction-schedule-update-dialog.component';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
  animations: [collapseAnimation],
})
export class MonthCalendarComponent implements OnInit {

  @Input() editable = false;
  @Input() hasLink = false;
  @Input() events = [];
  @Input() viewDate = new Date();
  @Input() tempSchedule: SiteVisitSchedule;
  @Output() tempScheduleChange: EventEmitter<SiteVisitSchedule> = new EventEmitter<SiteVisitSchedule>();

  isLoading = false;
  activeDayIsOpen = false;
  refresh: Subject<any> = new Subject();
  ScheduleType = ScheduleType;
  ROUTES = ROUTES;

  constructor(
    private dialog: MatDialog,
    private schedulerService: SchedulerService,
    private scheduleService: ScheduleService,
    private toastr: ToastrService,
    private alertService: AlertService,
    private datePipe: DatePipe,
    private optionLabelPipe: OptionLabelPipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async removeEvent(event: { event: CalendarEvent<any>, sourceEvent: any }) {
    event.sourceEvent.preventDefault();
    event.sourceEvent.stopPropagation();
    this.activeDayIsOpen = false;
    this.tempSchedule = null;
    this.tempScheduleChange.emit(this.tempSchedule);
  }

  customEventClicked(event: { event: CalendarEvent<Schedule>, sourceEvent: any, day: MonthViewDay<any> }) {
    event.sourceEvent.preventDefault();
    event.sourceEvent.stopPropagation();
    if (this.tempSchedule) {
      return;
    } else {
      this.dayClicked({day: event.day, sourceEvent: event.sourceEvent});
    }
    if (event.event.meta.type === ScheduleType.ProjectStart) {
      this.openConstructionScheduleUpdateDialog(event.event).pipe(filter(res => !!res)).subscribe((schedule: Schedule) => {
        event.event.start = new Date(schedule.from);
        event.event.end = new Date(schedule.to);
        event.event.meta = schedule;
        this.refresh.next();
      });
    }
  }

  dayClicked(event: { day: MonthViewDay<any>, sourceEvent: MouseEvent | KeyboardEvent }) {
    this.activeDayIsOpen = !!(event.day.events && event.day.events.length);
    this.viewDate = event.day.date;
    if (this.tempSchedule) {
      return;
    }
    if (this.editable) {
      this.schedulerService.openSiteVisitSchedulerFromRangePicker(new Date(event.day.date), event.day.events.map(x => x.meta)).pipe(
        filter(res => Boolean(res))
      ).subscribe((value: ScheduleTimeSlot) => {
        this.tempSchedule = { from: value.from.toISOString(), to: value.to.toISOString() };
        this.tempScheduleChange.emit(this.tempSchedule);
      });
    }
  }

  navigateToProjectDetailPage(projectId: string) {
    if (!this.hasLink) {
      return;
    }
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, projectId]);
  }

  async eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent) {
    if (isPast(newStart)) {
      this.alertService.yesNo('Warning!', `You are updating your calendar to passed date. Are you sure to change this schedule?`).subscribe(value => {
        if (value) {
          this.checkConflictAndSave(event, event.meta.type, newStart, newEnd);
        }
      });
    } else {
      this.checkConflictAndSave(event, event.meta.type, newStart, newEnd);
    }
  }

  private async changeEventTime({ event, newStart, newEnd }: CalendarEventTimesChangedEvent) {
    const tempPos = { start: event.start, end: event.end };
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
    try {
      this.isLoading = true;
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
      if (event.meta.isTemp) {
        event.meta.from = newStart.toISOString();
        event.meta.to = newEnd.toISOString();
        if (event.meta.id) {
          event.meta = await this.scheduleService.updateScheduleById(event.meta.id, {...event.meta, from: newStart.toISOString(), to: newEnd.toISOString()}).toPromise();
          this.tempSchedule = event.meta;
          this.tempScheduleChange.emit(this.tempSchedule);
        } else {
          this.tempSchedule = { from: event.meta.from, to: event.meta.to };
          this.tempScheduleChange.emit(this.tempSchedule);
        }
      } else {
        event.meta = await this.scheduleService.updateScheduleById(event.meta.id, {...event.meta, from: newStart.toISOString(), to: newEnd.toISOString()}).toPromise();
      }
    } catch (e) {
      // recover original position if API call failed
      event.start = tempPos.start;
      event.end = tempPos.end;
      this.refresh.next();
      this.toastr.error(e, 'Sorry, update schedule. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  private checkConflictAndSave(event, scheduleType: ScheduleType, newStart: Date, newEnd: Date) {
    const conflict = this.checkConflictAfterMoving(scheduleType, newStart, newEnd);
    if (conflict && scheduleType === ScheduleType.SiteVisitSchedule) { // only site visit schedule should be pass conflict checker
      this.alertService.alert('Schedule Conflict!',
        `${this.datePipe.transform(conflict.meta.from, 'MMM dd, yyyy hh:mm a')} - ${this.datePipe.transform(conflict.meta.to, 'hh:mm a')} is already scheduled<br/><br/>
                ${this.optionLabelPipe.transform(conflict.meta.type)} - ${conflict.title}`);
    } else {
      this.changeEventTime({ event, newStart, newEnd } as CalendarEventTimesChangedEvent);
    }
  }

  private checkConflictAfterMoving(scheduleType: ScheduleType, start: Date, end: Date) {
    return this.events.find(event => {
      const schedule = event.meta;
      const from = new Date(schedule.from);
      const to = new Date(schedule.to);
      return schedule.type === scheduleType && ((start > from && end < to) || (end >= from && start <= from) || (start <= to && end >= to));
    });
  }

  private openConstructionScheduleUpdateDialog(event: CalendarEvent<Schedule>): Observable<Schedule> {
    return this.dialog.open(ConstructionScheduleUpdateDialogComponent, {
      width: '550px',
      data: { event }
    }).afterClosed();
  }

}
