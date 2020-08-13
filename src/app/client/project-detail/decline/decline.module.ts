import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';

import { DeclineService } from './decline.service';

import { DeclineDialogComponent } from './decline-dialog/decline-dialog.component';

@NgModule({
  declarations: [
    DeclineDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    MatDialogModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ],
  providers: [
    DeclineService
  ]
})
export class DeclineModule {
  static forRoot(): ModuleWithProviders<DeclineModule> {
    return {
      ngModule: DeclineModule,
      providers: [
        DeclineService
      ]
    };
  }
}
