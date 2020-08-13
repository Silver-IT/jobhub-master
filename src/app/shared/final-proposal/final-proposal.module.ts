import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { FileUploaderModule } from '../../ui-kit/file-uploader/file-uploader.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProposalFormComponent } from './proposal-form.component';
import { SummaryRowComponent } from './summary-row/summary-row.component';
import { ProposalCommentInputComponent } from './proposal-comment-input/proposal-comment-input.component';
import { PortfolioProjectOnProposalComponent } from './portfolio-project-on-proposal/portfolio-project-on-proposal.component';

@NgModule({
  declarations: [
    ProposalFormComponent,
    SummaryRowComponent,
    ProposalCommentInputComponent,
    PortfolioProjectOnProposalComponent,
  ],
  exports: [
    ProposalFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    InputModule,
    PipesModule,
    FileUploaderModule,
    FormsModule,
    ButtonModule,
    CommonUiKitModule,
  ]
})
export class FinalProposalModule {
}
