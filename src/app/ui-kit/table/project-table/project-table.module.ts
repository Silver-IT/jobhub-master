import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { AvatarModule } from '../../avatar/avatar.module';
import { IconModule } from '../../icon/icon.module';
import { PipesModule } from '../../pipes/pipes.module';
import { AlertModule } from '../../alert/alert.module';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';

import { ProjectTableComponent } from './project-table.component';

@NgModule({
  declarations: [
    ProjectTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    AvatarModule,
    IconModule,
    PipesModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ],
  exports: [
    ProjectTableComponent
  ]
})
export class ProjectTableModule {
}
