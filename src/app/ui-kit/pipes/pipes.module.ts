import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { ColorPipe } from './color.pipe';
import { FullNamePipe } from './full-name.pipe';
import { OptionLabelPipe } from './option-label.pipe';
import { JobTypePipe } from './job-type.pipe';
import { NotificationPipe } from './notification.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { ProjectStatusPipe } from './project-status.pipe';
import { IsMinePipe } from './is-mine.pipe';
import { IsProjectEditablePipe } from './is-project-editable.pipe';
import { RecentDayPipe } from './recent-day.pipe';
import { ShortNumberPipe } from './short-number.pipe';
import { TimePassedPipe } from './time-passed.pipe';
import { TimeSlotToStandardFormatPipe } from './time-slot-to-standard-format.pipe';
import { ProjectStatusTextPipe } from './project-status-text.pipe';
import { IsSameDayPipe } from './is-same-day.pipe';
import { MilestoneAmountPipe } from './milestone-amount.pipe';
import { IsMilestonePaidPipe } from './is-milestone-paid.pipe';
import { CalendarScheduleColorPipe } from './calendar-schedule-color.pipe';
import { NthDayPipe } from './nth-day.pipe';
import { MilestoneAddOnColorPipe } from './milestone-add-on-color.pipe';
import { MilestoneAddOnOperatorPipe } from './milestone-add-on-operator.pipe';
import { ReviewAvailablePipe } from './review-available.pipe';
import { AccessoriesTextPipe } from '../../shared/final-proposal/pipes/accessories-text.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    ColorPipe,
    FullNamePipe,
    OptionLabelPipe,
    JobTypePipe,
    NotificationPipe,
    TimeAgoPipe,
    ProjectStatusPipe,
    IsMinePipe,
    IsProjectEditablePipe,
    RecentDayPipe,
    ShortNumberPipe,
    TimePassedPipe,
    TimeSlotToStandardFormatPipe,
    ProjectStatusTextPipe,
    IsSameDayPipe,
    MilestoneAmountPipe,
    IsMilestonePaidPipe,
    CalendarScheduleColorPipe,
    NthDayPipe,
    MilestoneAddOnColorPipe,
    MilestoneAddOnOperatorPipe,
    ReviewAvailablePipe,
    AccessoriesTextPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    ColorPipe,
    FullNamePipe,
    OptionLabelPipe,
    JobTypePipe,
    NotificationPipe,
    TimeAgoPipe,
    ProjectStatusPipe,
    IsMinePipe,
    IsProjectEditablePipe,
    RecentDayPipe,
    ShortNumberPipe,
    TimePassedPipe,
    TimeSlotToStandardFormatPipe,
    ProjectStatusTextPipe,
    IsSameDayPipe,
    MilestoneAmountPipe,
    IsMilestonePaidPipe,
    CalendarScheduleColorPipe,
    NthDayPipe,
    MilestoneAddOnColorPipe,
    MilestoneAddOnOperatorPipe,
    ReviewAvailablePipe,
    AccessoriesTextPipe
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    OptionLabelPipe
  ]
})
export class PipesModule {
}
