import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { AvatarModule } from '../../avatar/avatar.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ContractTableComponent } from './contract-table.component';

@NgModule({
  declarations: [
    ContractTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    PipesModule
  ],
  exports: [
    ContractTableComponent
  ]
})
export class ContractTableModule { }
