import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSettingComponent } from './payment-setting.component';

const routes: Routes = [
  {
    path: '', component: PaymentSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentSettingRoutingModule { }
