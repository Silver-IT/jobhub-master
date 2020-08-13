import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { EstimateModule } from '../../../ui-kit/estimate/estimate.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { MapModule } from '../../../ui-kit/map/map.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';
import { OauthModule } from '../../../shared/oauth/oauth.module';
import { DeclineModule } from '../decline/decline.module';
import { ProjectStatusAlertModule } from '../../../shared/project-status-alert/project-status-alert.module';

import { ProjectEstimateRoutingModule } from './project-estimate-routing.module';

import { ProjectEstimateComponent } from './project-estimate.component';
import { AddToCalendarDialogComponent } from './add-to-calendar-dialog/add-to-calendar-dialog.component';
import { SiteVisitScheduleDialogComponent } from './site-visit-schedule-dialog/site-visit-schedule-dialog.component';
import { CalendarListComponent } from './add-to-calendar-dialog/calendar-list/calendar-list.component';

@NgModule({
  declarations: [
    ProjectEstimateComponent,
    AddToCalendarDialogComponent,
    SiteVisitScheduleDialogComponent,
    CalendarListComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProjectEstimateRoutingModule,
    EstimateModule,
    DeclineModule.forRoot(),
    CommonUiKitModule,
    ProjectManageModule,
    MapModule,
    OauthModule.forRoot(),
    AlertModule.forRoot(),
    ProjectStatusAlertModule
  ]
})
export class ProjectEstimateModule { }
