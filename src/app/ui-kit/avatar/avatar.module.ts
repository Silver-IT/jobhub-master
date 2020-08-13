import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar.component';
import { ProjectIconPipe } from './pipes/project-icon.pipe';
import { NotificationAvatarComponent } from './notification-avatar/notification-avatar.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ProjectIconPipe,
    NotificationAvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    NotificationAvatarComponent
  ]
})
export class AvatarModule {
}
