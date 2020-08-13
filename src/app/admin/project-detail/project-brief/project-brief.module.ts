import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { InputModule } from '../../../ui-kit/input/input.module';
import { FileUploaderModule } from '../../../ui-kit/file-uploader/file-uploader.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { DirectivesModule } from '../../../ui-kit/directives/directives.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { SchedulerModule } from '../../../ui-kit/scheduler/scheduler.module';
import { ImagePreviewDialogModule } from '../../../shared/image-preview-dialog/image-preview-dialog.module';

import { ProjectBriefRoutingModule } from './project-brief-routing.module';

import { ProjectBriefComponent } from './project-brief.component';
import { SkipEstimateDialogComponent } from './skip-estimate-dialog/skip-estimate-dialog.component';
import { ProjectStatusAlertModule } from '../../../shared/project-status-alert/project-status-alert.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';

@NgModule({
  declarations: [
    ProjectBriefComponent,
    SkipEstimateDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ProjectBriefRoutingModule,
    InputModule,
    FileUploaderModule,
    CommonUiKitModule,
    DirectivesModule,
    PipesModule,
    ScrollToModule.forRoot(),
    ButtonModule,
    SchedulerModule.forRoot(),
    ImagePreviewDialogModule.forRoot(),
    AlertModule.forRoot(),
    ProjectStatusAlertModule
  ]
})
export class ProjectBriefModule { }
