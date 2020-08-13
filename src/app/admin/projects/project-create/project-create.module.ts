import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { ProjectCreateRoutingModule } from './project-create-routing.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { AvatarModule } from '../../../ui-kit/avatar/avatar.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectCreateComponent } from './project-create.component';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import { CustomerSignupWizardModule } from '../../../shared/customer-signup-wizard/customer-signup-wizard.module';



@NgModule({
  declarations: [ProjectCreateComponent, CustomerSelectComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    ProjectCreateRoutingModule,
    CustomerSignupWizardModule,
    CommonUiKitModule,
    InputModule,
    AvatarModule,
    FormsModule
  ],
})
export class ProjectCreateModule {
}
