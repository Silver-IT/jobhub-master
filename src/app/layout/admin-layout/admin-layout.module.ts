import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutKitModule } from '../layout-kit/layout-kit.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminSearchInputComponent } from './admin-search-input/admin-search-input.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminSearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    LayoutKitModule,
    IconModule,
    AvatarModule,
    PipesModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
