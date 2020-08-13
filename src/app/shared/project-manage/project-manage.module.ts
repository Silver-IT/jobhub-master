import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';
import { InformationTooltipModule } from '../../ui-kit/information-tooltip/information-tooltip.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { RequestChatComponent } from './request-chat/request-chat.component';
import { ReviewContractComponent } from './request-contract/review-contract.component';

@NgModule({
  declarations: [
    RequestChatComponent,
    ReviewContractComponent,
  ],
  exports: [
    RequestChatComponent,
    ReviewContractComponent,
  ],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    RouterModule,
    AvatarModule,
    RouterModule,
    PipesModule,
    CommonUiKitModule,
    AlertModule.forRoot(),
    InformationTooltipModule,
    ButtonModule
  ]
})
export class ProjectManageModule {
}
