import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { TabsetModule } from '../../ui-kit/tabset/tabset.module';
import { DirectivesModule } from '../../ui-kit/directives/directives.module';
import { FileUploaderModule } from '../../ui-kit/file-uploader/file-uploader.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageComponent } from './account-page.component';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    AccountPageRoutingModule,
    AvatarModule,
    PipesModule,
    TabsetModule,
    FileUploaderModule,
    CommonUiKitModule,
    DirectivesModule
  ]
})
export class AccountPageModule {
}
