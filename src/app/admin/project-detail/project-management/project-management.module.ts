import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { ProjectManageModule } from '../../../shared/project-manage/project-manage.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { AvatarModule } from '../../../ui-kit/avatar/avatar.module';
import { MilestoneModule } from '../../../shared/project-manage/milestone/milestone.module';
import { ProjectManagementComponent } from './project-management.component';
import { EditMilestoneDialogComponent } from './edit-milestone-dialog/edit-milestone-dialog.component';
import { MakeRefundDialogComponent } from './make-refund-dialog/make-refund-dialog.component';


@NgModule({
  declarations: [ProjectManagementComponent, EditMilestoneDialogComponent, MakeRefundDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    ProjectManagementRoutingModule,
    CommonUiKitModule,
    ProjectManageModule,
    MilestoneModule,
    PipesModule,
    AlertModule.forRoot(),
    InputModule,
    AvatarModule
  ]
})
export class ProjectManagementModule { }
