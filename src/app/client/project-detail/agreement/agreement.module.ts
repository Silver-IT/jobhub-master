import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { InputModule } from '../../../ui-kit/input/input.module';

import { AgreementService } from './agreement.service';
import { AgreementDialogComponent } from './agreement-dialog/agreement-dialog.component';
import { PaymentTermsDialogComponent } from './payment-terms-dialog/payment-terms-dialog.component';

@NgModule({
  declarations: [
    AgreementDialogComponent,
    PaymentTermsDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    InputModule
  ],
  providers: [
    AgreementService
  ]
})
export class AgreementModule {
  static forRoot(): ModuleWithProviders<AgreementModule> {
    return {
      ngModule: AgreementModule,
      providers: [
        AgreementService
      ]
    };
  }
}
