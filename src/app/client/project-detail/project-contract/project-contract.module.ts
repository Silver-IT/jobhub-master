import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { MapModule } from '../../../ui-kit/map/map.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { ContractModule } from '../../../shared/contract/contract.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { AgreementModule } from '../agreement/agreement.module';

import { ProjectContractRoutingModule } from './project-contract-routing.module';
import { ProjectContractComponent } from './project-contract.component';

@NgModule({
  declarations: [ProjectContractComponent],
  imports: [
    CommonModule,
    ScrollToModule,
    ProjectContractRoutingModule,
    ContractModule,
    MapModule,
    ProjectManageModule,
    AgreementModule.forRoot(),
    CommonUiKitModule,
    PipesModule,
  ]
})
export class ProjectContractModule { }
