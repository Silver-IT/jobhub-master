import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { IconModule } from '../../ui-kit/icon/icon.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { NotificationsPageRoutingModule } from './notifications-page-routing.module';
import { NotificationsPageComponent } from './notifications-page.component';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

@NgModule({
  declarations: [
    NotificationsPageComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NotificationsPageRoutingModule,
    AvatarModule,
    IconModule,
    PipesModule,
    CommonUiKitModule
  ]
})
export class NotificationsPageModule {
}
