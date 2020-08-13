import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkTableModule } from '../../ui-kit/table/network-table/network-table.module';

import { NetworkContractorsRoutingModule } from './network-contractors-routing.module';

import { NetworkContractorsComponent } from './network-contractors.component';
import { NetworkContractorDetailsDialogComponent } from './network-contractor-details-dialog/network-contractor-details-dialog.component';
import { InputModule } from '../../ui-kit/input/input.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';

@NgModule({
  declarations: [
    NetworkContractorsComponent,
    NetworkContractorDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    NetworkContractorsRoutingModule,
    NetworkTableModule,
    InputModule,
    MatDialogModule,
    AvatarModule
  ]
})
export class NetworkContractorsModule {
}
