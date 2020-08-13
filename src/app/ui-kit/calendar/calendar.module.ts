import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { InputModule } from '../input/input.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';
import { IconModule } from '../icon/icon.module';
import { AlertModule } from '../alert/alert.module';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { PipesModule } from '../pipes/pipes.module';

import { MonthCalendarComponent } from './month-calendar/month-calendar.component';
import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import { CalendarNavigatorComponent } from './calendar-navigator/calendar-navigator.component';
import { ScheduleTypeFilterComponent } from './schedule-type-filter/schedule-type-filter.component';
import { ConstructionScheduleUpdateDialogComponent } from './construction-schedule-update-dialog/construction-schedule-update-dialog.component';

@NgModule({
  declarations: [
    CalendarNavigatorComponent,
    MonthCalendarComponent,
    DayCalendarComponent,
    ScheduleTypeFilterComponent,
    ConstructionScheduleUpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularCalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    InputModule,
    CommonUiKitModule,
    IconModule,
    SchedulerModule.forRoot(),
    AlertModule.forRoot(),
    PipesModule
  ],
  exports: [
    MonthCalendarComponent,
    DayCalendarComponent,
    CalendarNavigatorComponent,
    ScheduleTypeFilterComponent
  ]
})
export class CalendarModule {
}
