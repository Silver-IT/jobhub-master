import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { InformationTooltipModule } from '../../../ui-kit/information-tooltip/information-tooltip.module';
import { FinalMilestoneComponent } from './final-milestone/final-milestone.component';
import { MilestoneAddOnComponent } from './milestone-add-on/milestone-add-on.component';
import { MilestoneTemplateComponent } from './milestone-template/milestone-template.component';
import { DepositMilestoneComponent } from './deposit-milestone/deposit-milestone.component';
import { StartMilestoneComponent } from './start-milestone/start-milestone.component';
import { MilestonePaymentControlComponent } from './milestone-payment-control/milestone-payment-control.component';


@NgModule({
  declarations: [
    MilestoneAddOnComponent,
    MilestoneTemplateComponent,
    FinalMilestoneComponent,
    DepositMilestoneComponent,
    StartMilestoneComponent,
    MilestonePaymentControlComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
    InformationTooltipModule,
  ],
  exports: [
    DepositMilestoneComponent,
    FinalMilestoneComponent,
    StartMilestoneComponent,
  ],
})
export class MilestoneModule { }
