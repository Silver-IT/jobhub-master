import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { IconModule } from '../../ui-kit/icon/icon.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { InboxMenuComponent } from './inbox-menu/inbox-menu.component';

@NgModule({
  declarations: [
    AppFooterComponent,
    NotificationBoxComponent,
    NotificationMenuComponent,
    InboxMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    NgbDropdownModule,
    AvatarModule,
    PipesModule,
    CommonUiKitModule
  ],
  exports: [
    AppFooterComponent,
    NotificationBoxComponent,
    NotificationMenuComponent,
    InboxMenuComponent
  ]
})
export class LayoutKitModule {
}
