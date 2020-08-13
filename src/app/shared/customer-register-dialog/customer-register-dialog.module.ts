import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { CustomerRegisterDialogComponent } from './customer-register-dialog.component';
import { CustomerRegisterDialogService } from './customer-register-dialog.service';

@NgModule({
  declarations: [
    CustomerRegisterDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    InputModule,
    PipesModule,
    CommonUiKitModule
  ],
  providers: [
    CustomerRegisterDialogService
  ]
})
export class CustomerRegisterDialogModule {
  static forRoot(): ModuleWithProviders<CustomerRegisterDialogModule> {
    return {
      ngModule: CustomerRegisterDialogModule,
      providers: [
        CustomerRegisterDialogService
      ]
    };
  }
}
