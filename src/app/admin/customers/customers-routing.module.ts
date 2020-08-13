import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { CustomerByIdResolver } from '../../core/resolvers/customer-by-id.resolver';

import { CustomersComponent } from './customers.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerProjectsComponent } from './customer-projects/customer-projects.component';
import { CustomerContractsComponent } from './customer-contracts/customer-contracts.component';
import { CustomerSessionsComponent } from './customer-sessions/customer-sessions.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent
  }, {
    path: ROUTES.common.create,
    loadChildren: () => import('./customer-create/customer-create.module').then(m => m.CustomerCreateModule)
  }, {
    path: ':id', component: CustomerProfileComponent,
    resolve: { user: CustomerByIdResolver },
    children: [
      {
        path: '', redirectTo: ROUTES.common.account.projectsSetting, pathMatch: 'full'
      },
      {
        path: ROUTES.common.account.accountSetting, component: CustomerAccountComponent,
      },
      {
        path: ROUTES.common.account.projectsSetting, component: CustomerProjectsComponent
      },
      {
        path: ROUTES.common.account.contracts, component: CustomerContractsComponent
      },
      {
        path: ROUTES.common.account.logRocket, component: CustomerSessionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
