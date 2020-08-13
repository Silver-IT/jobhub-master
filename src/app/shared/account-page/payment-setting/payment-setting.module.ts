import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTableModule } from '../../../ui-kit/table/project-table/project-table.module';

import { PaymentSettingRoutingModule } from './payment-setting-routing.module';
import { PaymentSettingComponent } from './payment-setting.component';

@NgModule({
  declarations: [
    PaymentSettingComponent
  ],
  imports: [
    CommonModule,
    PaymentSettingRoutingModule,
    ProjectTableModule
  ]
})
export class PaymentSettingModule {
}
