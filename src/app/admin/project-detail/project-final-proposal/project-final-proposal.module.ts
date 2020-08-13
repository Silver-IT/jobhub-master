import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectFinalProposalRoutingModule } from './project-final-proposal-routing.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { FileUploaderModule } from '../../../ui-kit/file-uploader/file-uploader.module';
import { FinalProposalModule } from '../../../shared/final-proposal/final-proposal.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { ProjectStatusAlertModule } from '../../../shared/project-status-alert/project-status-alert.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { ProposalGeneralComponent } from './proposal-general/proposal-general.component';
import { ProjectFinalProposalComponent } from './project-final-proposal.component';
import { ProposalPreviewComponent } from './proposal-preview/proposal-preview.component';

@NgModule({
  declarations: [ProjectFinalProposalComponent, ProposalGeneralComponent, ProposalPreviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectFinalProposalRoutingModule,
    InputModule,
    FileUploaderModule,
    FinalProposalModule,
    CommonUiKitModule,
    ProjectStatusAlertModule,
    ButtonModule,
    PipesModule,
    ProjectManageModule
  ]
})
export class ProjectFinalProposalModule { }
