import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserTableModule } from '../../ui-kit/table/user-table/user-table.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { ContractTableModule } from '../../ui-kit/table/contract-table/contract-table.module';
import { ProjectTableModule } from '../../ui-kit/table/project-table/project-table.module';
import { LogRocketTableModule } from '../../ui-kit/table/log-rocket-table/log-rocket-table.module';
import { ContractModule } from '../../shared/contract/contract.module';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProjectsComponent } from './customer-projects/customer-projects.component';
import { CustomerContractsComponent } from './customer-contracts/customer-contracts.component';
import { CustomerSessionsComponent } from './customer-sessions/customer-sessions.component';
import { CustomerAccountModule } from './customer-account/customer-account.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerProfileComponent,
    CustomerProjectsComponent,
    CustomerContractsComponent,
    CustomerSessionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    UserTableModule,
    AvatarModule,
    PipesModule,
    InputModule,
    ProjectTableModule,
    ContractTableModule,
    LogRocketTableModule,
    ContractModule,
    CustomerAccountModule
  ]
})
export class CustomersModule { }
