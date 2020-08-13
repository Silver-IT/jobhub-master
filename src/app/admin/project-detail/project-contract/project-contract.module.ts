import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ContractModule } from '../../../shared/contract/contract.module';

import { ProjectContractRoutingModule } from './project-contract-routing.module';
import { ProjectContractComponent } from './project-contract.component';

@NgModule({
  declarations: [
    ProjectContractComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    ProjectContractRoutingModule,
    ContractModule,
    CommonUiKitModule
  ]
})
export class ProjectContractModule { }
