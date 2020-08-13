import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { ProjectPaymentRoutingModule } from './project-payment-routing.module';

import { ProjectPaymentComponent } from './project-payment.component';
import { SelectPaymentMethodDialogComponent } from './select-payment-method-dialog/select-payment-method-dialog.component';
import { CreditCardPaymentDialogComponent } from './credit-card-payment-dialog/credit-card-payment-dialog.component';
import { ProjectCompletedDialogComponent } from './project-completed-dialog/project-completed-dialog.component';
import { MilestoneModule } from '../../../shared/project-manage/milestone/milestone.module';

@NgModule({
  declarations: [
    ProjectPaymentComponent,
    SelectPaymentMethodDialogComponent,
    CreditCardPaymentDialogComponent,
    ProjectCompletedDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ProjectPaymentRoutingModule,
    ProjectManageModule,
    MilestoneModule,
    ButtonModule,
    InputModule,
    CommonUiKitModule,
    AlertModule.forRoot(),
    PipesModule
  ]
})
export class ProjectPaymentModule { }
