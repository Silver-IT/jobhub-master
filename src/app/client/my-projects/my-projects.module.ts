import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectTableModule } from '../../ui-kit/table/project-table/project-table.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { AlertModule } from '../../ui-kit/alert/alert.module';
import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { MyProjectsComponent } from './my-projects.component';

@NgModule({
  declarations: [
    MyProjectsComponent
  ],
  imports: [
    CommonModule,
    MyProjectsRoutingModule,
    ProjectTableModule,
    CommonUiKitModule,
    PipesModule,
    AlertModule.forRoot()
  ]
})
export class MyProjectsModule {
}
