import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';

import { ProjectOrderMaterialRoutingModule } from './project-order-material-routing.module';

import { ProjectOrderMaterialComponent } from './project-order-material.component';

@NgModule({
  declarations: [
    ProjectOrderMaterialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectOrderMaterialRoutingModule,
    CommonUiKitModule,
    PipesModule,
    InputModule,
    ProjectManageModule
  ]
})
export class ProjectOrderMaterialModule { }
