import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { CustomerSignupWizardModule } from '../../shared/customer-signup-wizard/customer-signup-wizard.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
  declarations: [
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    CreateProjectRoutingModule,
    CustomerSignupWizardModule,
    CommonUiKitModule
  ]
})
export class CreateProjectModule {
}
