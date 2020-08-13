import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { AvatarModule } from '../../avatar/avatar.module';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';

import { ContractorTableComponent } from './contractor-table/contractor-table.component';
import { CategoryTableComponent } from './category-table/category-table.component';

@NgModule({
  declarations: [
    ContractorTableComponent,
    CategoryTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    CommonUiKitModule
  ],
  exports: [
    ContractorTableComponent,
    CategoryTableComponent
  ]
})
export class NetworkTableModule {
}
