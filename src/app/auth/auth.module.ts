import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutModule } from '../layout/auth-layout/auth-layout.module';
import { PipesModule } from '../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../ui-kit/input/input.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AcceptInviteComponent } from './accept-invite/accept-invite.component';
import { VerifyEmailChangeComponent } from './verify-email-change/verify-email-change.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
    AcceptInviteComponent,
    VerifyEmailChangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    PipesModule,
    CommonUiKitModule,
    AuthLayoutModule,
    InputModule
  ]
})
export class AuthModule {
}
