import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';

import { ProjectCbydRoutingModule } from './project-cbyd-routing.module';

import { ProjectCbydComponent } from './project-cbyd.component';

@NgModule({
  declarations: [ProjectCbydComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    InputModule,
    CommonUiKitModule,
    ProjectManageModule,
    ProjectCbydRoutingModule
  ]
})
export class ProjectCbydModule {
}
