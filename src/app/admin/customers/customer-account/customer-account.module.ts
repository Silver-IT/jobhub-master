import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerAccountRoutingModule } from './customer-account-routing.module';

import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ChangeEmailFormComponent } from './change-email-form/change-email-form.component';
import { CustomerAccountComponent } from './customer-account.component';
import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';



@NgModule({
  declarations: [CustomerAccountComponent, ProfileFormComponent, ChangeEmailFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CustomerAccountRoutingModule,
    CommonUiKitModule
  ]
})
export class CustomerAccountModule { }
