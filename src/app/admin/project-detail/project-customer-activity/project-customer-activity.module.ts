import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ProjectCustomerActivityRoutingModule } from './project-customer-activity-routing.module';

import { ProjectCustomerActivityComponent } from './project-customer-activity.component';

@NgModule({
  declarations: [
    ProjectCustomerActivityComponent
  ],
  imports: [
    CommonModule,
    ProjectCustomerActivityRoutingModule,
    PipesModule,
    CommonUiKitModule
  ]
})
export class ProjectCustomerActivityModule { }
