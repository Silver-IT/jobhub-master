import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { CustomerSignupWizardModule } from '../../shared/customer-signup-wizard/customer-signup-wizard.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';

import { RequestEstimateRoutingModule } from './request-estimate-routing.module';

import { RequestEstimateComponent } from './request-estimate.component';

@NgModule({
  declarations: [
    RequestEstimateComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    RequestEstimateRoutingModule,
    PageBuilderKitModule,
    CustomerSignupWizardModule,
    CommonUiKitModule,
    AlertModule.forRoot(),
  ],
  providers: [
    DatePipe
  ]
})
export class RequestEstimateModule {
}
