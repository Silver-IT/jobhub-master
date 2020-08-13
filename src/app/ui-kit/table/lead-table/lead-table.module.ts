import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { AvatarModule } from '../../avatar/avatar.module';
import { PipesModule } from '../../pipes/pipes.module';
import { AlertModule } from '../../alert/alert.module';

import { LeadTableComponent } from './lead-table.component';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';

@NgModule({
  declarations: [
    LeadTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    PipesModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ],
  exports: [
    LeadTableComponent
  ]
})
export class LeadTableModule {
}
