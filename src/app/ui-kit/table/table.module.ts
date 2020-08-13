import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    CommonUiKitModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
}
