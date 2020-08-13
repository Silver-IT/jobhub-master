import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTableModule } from '../../../ui-kit/table/project-table/project-table.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { ProjectsSettingRoutingModule } from './projects-setting-routing.module';
import { ProjectsSettingComponent } from './projects-setting.component';

@NgModule({
  declarations: [
    ProjectsSettingComponent
  ],
  imports: [
    CommonModule,
    ProjectsSettingRoutingModule,
    ProjectTableModule,
    PipesModule,
  ]
})
export class ProjectsSettingModule {
}
