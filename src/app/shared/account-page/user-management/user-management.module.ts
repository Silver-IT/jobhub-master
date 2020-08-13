import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AvatarModule } from '../../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';

import { UserManagementRoutingModule } from './user-management-routing.module';

import { UserManagementComponent } from './user-management.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    UserItemComponent,
    UserFormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    MatDialogModule,
    UserManagementRoutingModule,
    AvatarModule,
    PipesModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ]
})
export class UserManagementModule { }
