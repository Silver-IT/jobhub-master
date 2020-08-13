import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IconModule } from '../icon/icon.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { RequestEstimateButtonComponent } from './request-estimate-button/request-estimate-button.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { InvitationButtonComponent } from './invitation-button/invitation-button.component';
import { ToggleButtonGroupComponent } from './toggle-button-group/toggle-button-group.component';
import { SendMessageButtonComponent } from './send-message-button/send-message-button.component';

@NgModule({
  declarations: [
    SocialButtonsComponent,
    RequestEstimateButtonComponent,
    PaymentButtonComponent,
    LikeButtonComponent,
    InvitationButtonComponent,
    ToggleButtonGroupComponent,
    SendMessageButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ScrollToModule.forRoot(),
    IconModule,
    CommonUiKitModule
  ],
  exports: [
    SocialButtonsComponent,
    RequestEstimateButtonComponent,
    PaymentButtonComponent,
    LikeButtonComponent,
    InvitationButtonComponent,
    ToggleButtonGroupComponent,
    SendMessageButtonComponent
  ]
})
export class ButtonModule { }
