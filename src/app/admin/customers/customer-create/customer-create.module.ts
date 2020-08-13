import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { CustomerSignupWizardModule } from '../../../shared/customer-signup-wizard/customer-signup-wizard.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';

import { CustomerCreateRoutingModule } from './customer-create-routing.module';
import { CustomerCreateComponent } from './customer-create.component';

@NgModule({
  declarations: [
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    CustomerCreateRoutingModule,
    CustomerSignupWizardModule,
    CommonUiKitModule
  ]
})
export class CustomerCreateModule { }
