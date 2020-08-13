import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { FileUploaderModule } from '../../ui-kit/file-uploader/file-uploader.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { HiringRoutingModule } from './hiring-routing.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';

import { HiringComponent } from './hiring.component';
import { JobApplyDialogComponent } from './job-apply-dialog/job-apply-dialog.component';

@NgModule({
  declarations: [
    HiringComponent,
    JobApplyDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    HiringRoutingModule,
    PageBuilderKitModule,
    PipesModule,
    FileUploaderModule,
    InputModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ]
})
export class HiringModule {
}
