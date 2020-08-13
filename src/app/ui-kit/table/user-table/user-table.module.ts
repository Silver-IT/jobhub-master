import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';
import { AvatarModule } from '../../avatar/avatar.module';
import { PipesModule } from '../../pipes/pipes.module';

import { UserTableComponent } from './user-table.component';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AvatarModule,
    CommonUiKitModule,
    PipesModule
  ],
  exports: [
    UserTableComponent
  ]
})
export class UserTableModule {
}
