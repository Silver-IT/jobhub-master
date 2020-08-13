import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';

import { AccountSettingRoutingModule } from './account-setting-routing.module';
import { AccountSettingComponent } from './account-setting.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    AccountSettingComponent,
    ChangePasswordFormComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountSettingRoutingModule,
    InputModule,
    CommonUiKitModule
  ]
})
export class AccountSettingModule {
}
