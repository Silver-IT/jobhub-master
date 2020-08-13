import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { UserRole } from '../../core/models/auth';
import { RoleGuard } from '../../core/guards/role.guard';
import { AccountPageComponent } from './account-page.component';

const routes: Routes = [
  {
    path: '', component: AccountPageComponent,
    children: [
      {
        path: ROUTES.common.account.projectsSetting,
        loadChildren: () => import('./projects-setting/projects-setting.module').then(m => m.ProjectsSettingModule),
        canActivate: [RoleGuard],
        data: {
          roles: [UserRole.Customer]
        }
      },
      {
        path: ROUTES.common.account.accountSetting,
        loadChildren: () => import('./account-setting/account-setting.module').then(m => m.AccountSettingModule)
      },
      {
        path: ROUTES.common.account.paymentSetting,
        loadChildren: () => import('./payment-setting/payment-setting.module').then(m => m.PaymentSettingModule)
      },
      {
        path: ROUTES.common.account.userManagement,
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        canActivate: [RoleGuard],
        data: {
          roles: [UserRole.SuperAdmin]
        }
      },
      {
        path: ROUTES.common.account.logRocket,
        loadChildren: () => import('./log-rocket/log-rocket.module').then(m => m.LogRocketModule),
        canActivate: [RoleGuard],
        data: {
          roles: [UserRole.SuperAdmin, UserRole.Contractor]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }
