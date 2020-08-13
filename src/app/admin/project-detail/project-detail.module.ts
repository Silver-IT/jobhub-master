import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ProjectStatusPipe } from '../../ui-kit/pipes/project-status.pipe';
import { MapModule } from '../../ui-kit/map/map.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { ProjectDetailStateModule } from '../../shared/project-detail-state/project-detail-state.module';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';

import { ProjectDetailComponent } from './project-detail.component';

@NgModule({
  declarations: [
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    AvatarModule,
    PipesModule,
    ProjectDetailStateModule.forRoot(),
    MapModule.forRoot(),
    ButtonModule
  ],
  providers: [
    ProjectStatusPipe,
  ]
})
export class ProjectDetailModule {
}
