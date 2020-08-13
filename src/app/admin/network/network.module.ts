import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkTableModule } from '../../ui-kit/table/network-table/network-table.module';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';

@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    NetworkTableModule,
  ]
})
export class NetworkModule {
}
