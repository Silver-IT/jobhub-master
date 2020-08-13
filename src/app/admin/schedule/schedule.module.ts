import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from '../../ui-kit/calendar/calendar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CalendarModule,
    PipesModule
  ]
})
export class ScheduleModule { }
