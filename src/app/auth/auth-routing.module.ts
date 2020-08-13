import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';
import { AnnonGuard } from '../core/guards/annon.guard';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AcceptInviteComponent } from './accept-invite/accept-invite.component';
import { VerifyEmailChangeComponent } from './verify-email-change/verify-email-change.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      {
        path: ROUTES.auth.login, component: LoginComponent,
        canActivate: [AnnonGuard]
      },
      {
        path: ROUTES.auth.forgotPassword, component: ForgotPasswordComponent,
        canActivate: [AnnonGuard]
      },
      {
        path: ROUTES.auth.resetPassword + '/:token', component: ResetPasswordComponent,
        canActivate: [AnnonGuard]
      },
      {
        path: ROUTES.auth.invite + '/:token', component: AcceptInviteComponent,
        canActivate: [AnnonGuard]
      },
      {
        path: ROUTES.auth.verify + '/:token', component: VerifyEmailComponent,
        canActivate: []
      },
      {
        path: ROUTES.auth.verifyEmailChange + '/:token', component: VerifyEmailChangeComponent,
        canActivate: []
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
