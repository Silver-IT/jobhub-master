import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { FinalProposalModule } from '../../../shared/final-proposal/final-proposal.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { MapModule } from '../../../ui-kit/map/map.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { DeclineModule } from '../decline/decline.module';
import { AgreementModule } from '../agreement/agreement.module';
import { ProjectStatusAlertModule } from '../../../shared/project-status-alert/project-status-alert.module';

import { ProjectFinalProposalRoutingModule } from './project-final-proposal-routing.module';

import { ProjectFinalProposalComponent } from './project-final-proposal.component';

@NgModule({
  declarations: [
    ProjectFinalProposalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProjectFinalProposalRoutingModule,
    FinalProposalModule,
    InputModule,
    CommonUiKitModule,
    DeclineModule.forRoot(),
    AgreementModule.forRoot(),
    AlertModule.forRoot(),
    ProjectManageModule,
    MapModule,
    PipesModule,
    ProjectStatusAlertModule
  ]
})
export class ProjectFinalProposalModule { }
