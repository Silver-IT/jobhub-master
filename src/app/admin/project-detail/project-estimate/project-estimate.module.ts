import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../../ui-kit/input/input.module';
import { CalendarModule } from '../../../ui-kit/calendar/calendar.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { EstimateModule } from '../../../ui-kit/estimate/estimate.module';
import { IconModule } from '../../../ui-kit/icon/icon.module';
import { DirectivesModule } from '../../../ui-kit/directives/directives.module';
import { ProjectStatusAlertModule } from '../../../shared/project-status-alert/project-status-alert.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';

import { ProjectEstimateRoutingModule } from './project-estimate-routing.module';

import { ProjectEstimateComponent } from './project-estimate.component';
import { EstimateGeneralComponent } from './estimate-general/estimate-general.component';
import { EstimateScheduleComponent } from './estimate-schedule/estimate-schedule.component';
import { EstimatePreviewComponent } from './estimate-preview/estimate-preview.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    ProjectEstimateComponent,
    EstimateGeneralComponent,
    EstimateScheduleComponent,
    EstimatePreviewComponent
  ],
  imports: [
    CommonModule,
    ProjectEstimateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CalendarModule,
    PipesModule,
    CommonUiKitModule,
    EstimateModule,
    IconModule,
    DirectivesModule,
    ProjectStatusAlertModule,
    ScrollToModule.forRoot(),
    ButtonModule
  ]
})
export class ProjectEstimateModule {
}
