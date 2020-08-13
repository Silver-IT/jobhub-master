import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ProjectEmailActivityRoutingModule } from './project-email-activity-routing.module';

import { ProjectEmailActivityComponent } from './project-email-activity.component';
import { EmailEventTitlePipe } from './pipes/email-event-title.pipe';


@NgModule({
  declarations: [ProjectEmailActivityComponent, EmailEventTitlePipe],
  imports: [
    CommonModule,
    ProjectEmailActivityRoutingModule,
    CommonUiKitModule
  ]
})
export class ProjectEmailActivityModule { }
