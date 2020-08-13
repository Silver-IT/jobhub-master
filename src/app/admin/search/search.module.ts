import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { SearchRoutingModule } from './search-routing.module';

import { IsSearchResultEmptyPipe } from './pipes/is-search-result-empty.pipe';

import { SearchComponent } from './search.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { UserItemComponent } from './user-item/user-item.component';
import { NetworkContractorItemComponent } from './network-contractor-item/network-contractor-item.component';

@NgModule({
  declarations: [
    SearchComponent,
    IsSearchResultEmptyPipe,
    ProjectItemComponent,
    UserItemComponent,
    NetworkContractorItemComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    AvatarModule,
    PipesModule,
    CommonUiKitModule
  ]
})
export class SearchModule { }
