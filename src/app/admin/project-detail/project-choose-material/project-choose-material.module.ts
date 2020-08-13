import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { SchedulerModule } from '../../../ui-kit/scheduler/scheduler.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';

import { ProjectChooseMaterialRoutingModule } from './project-choose-material-routing.module';

import { ProjectChooseMaterialComponent } from './project-choose-material.component';

@NgModule({
  declarations: [
    ProjectChooseMaterialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectChooseMaterialRoutingModule,
    PipesModule,
    InputModule,
    CommonUiKitModule,
    SchedulerModule.forRoot(),
    ProjectManageModule
  ]
})
export class ProjectChooseMaterialModule { }
