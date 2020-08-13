import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutKitModule } from '../layout-kit/layout-kit.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';

import { ClientLayoutComponent } from './client-layout.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { GlobalNotificationComponent } from './global-notification/global-notification.component';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    ProfileDropdownComponent,
    GlobalNotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    LayoutKitModule,
    PipesModule,
    AvatarModule,
    IconModule
  ],
  exports: [
    ClientLayoutComponent
  ]
})
export class ClientLayoutModule { }
