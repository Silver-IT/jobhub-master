import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';

import { JobTableComponent } from './job-table/job-table.component';
import { ApplicantTableComponent } from './applicant-table/applicant-table.component';

@NgModule({
  declarations: [
    JobTableComponent,
    ApplicantTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PipesModule,
    CommonUiKitModule
  ],
  exports: [
    JobTableComponent,
    ApplicantTableComponent
  ]
})
export class HiringTableModule {
}
