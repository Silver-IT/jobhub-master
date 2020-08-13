import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../ui-kit/input/input.module';
import { MapModule } from '../../ui-kit/map/map.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { ProjectTableModule } from '../../ui-kit/table/project-table/project-table.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ProjectLeadComponent } from './project-lead.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

@NgModule({
  declarations: [
    ProjectLeadComponent,
    CustomerProfileComponent
  ],
  exports: [
    ProjectLeadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CommonUiKitModule,
    MapModule,
    PipesModule,
    AvatarModule,
    ProjectTableModule
  ]
})
export class ProjectLeadModule { }
