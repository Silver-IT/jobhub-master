import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { HiringTableModule } from '../../ui-kit/table/hiring-table/hiring-table.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';

import { HiringRoutingModule } from './hiring-routing.module';

import { HiringComponent } from './hiring.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    HiringComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiKitModule,
    InputModule,
    HiringRoutingModule,
    HiringTableModule,
    AlertModule.forRoot(),
  ]
})
export class HiringModule {
}
