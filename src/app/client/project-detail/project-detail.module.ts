import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../ui-kit/input/input.module';
import { FileUploaderModule } from '../../ui-kit/file-uploader/file-uploader.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ProjectManageModule } from '../../shared/project-manage/project-manage.module';
import { MapModule } from '../../ui-kit/map/map.module';
import { ProjectDetailStateModule } from '../../shared/project-detail-state/project-detail-state.module';
import { ProjectStatusAlertModule } from '../../shared/project-status-alert/project-status-alert.module';

import { ProjectDetailPanelComponent } from './project-detail-panel/project-detail-panel.component';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';

@NgModule({
  declarations: [
    ProjectDetailPanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectDetailRoutingModule,
    InputModule,
    FileUploaderModule,
    PipesModule,
    ProjectDetailStateModule.forRoot(),
    ProjectManageModule,
    MapModule,
    ProjectStatusAlertModule
  ],
})
export class ProjectDetailModule {
}
