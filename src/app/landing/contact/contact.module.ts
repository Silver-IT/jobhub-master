import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { MapModule } from '../../ui-kit/map/map.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    PageBuilderKitModule,
    InputModule,
    AlertModule.forRoot(),
    MapModule.forRoot(),
    ContactRoutingModule,
    CommonUiKitModule,
  ]
})
export class ContactModule {
}
