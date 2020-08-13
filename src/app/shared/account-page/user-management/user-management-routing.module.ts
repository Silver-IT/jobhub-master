import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { ContractorsResolver } from '../../../core/resolvers/contractors.resolver';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent,
    resolve: {
      users: ContractorsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
