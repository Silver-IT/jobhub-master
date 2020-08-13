import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { IconModule } from '../icon/icon.module';
import { PipesModule } from '../pipes/pipes.module';

import { SpinnerComponent } from './spinner/spinner.component';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';
import { ActionDropdownComponent } from './action-dropdown/action-dropdown.component';
import { ScheduleIconComponent } from './schedule-icon/schedule-icon.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ImageRendererComponent,
    ActionDropdownComponent,
    ScheduleIconComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgbDropdownModule,
    IconModule,
    PipesModule
  ],
  exports: [
    SpinnerComponent,
    ImageRendererComponent,
    ActionDropdownComponent,
    ScheduleIconComponent,
    SignatureComponent
  ]
})
export class CommonUiKitModule {
}
