import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailStateService } from './project-detail-state.service';
import { ProjectDetailResolverGuard } from './guards/project-detail-resolver.guard';
import { EstimateGuard } from './guards/estimate.guard';
import { ProposalGuard } from './guards/proposal.guard';
import { ContractGuard } from './guards/contract.guard';
import { ManagementGuard } from './guards/management.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProjectDetailStateService,
    ProjectDetailResolverGuard,
    EstimateGuard,
    ProposalGuard,
    ContractGuard,
    ManagementGuard
  ]
})
export class ProjectDetailStateModule {
  static forRoot(): ModuleWithProviders<ProjectDetailStateModule> {
    return {
      ngModule: ProjectDetailStateModule,
      providers: [
        ProjectDetailStateService,
        ProjectDetailResolverGuard,
        EstimateGuard,
        ProposalGuard,
        ContractGuard,
        ManagementGuard
      ]
    };
  }
}
