import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { InputModule } from '../../ui-kit/input/input.module';
import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { IdeaBoardPageRoutingModule } from './idea-board-page-routing.module';

import { IdeaBoardPageComponent } from './idea-board-page.component';

@NgModule({
  declarations: [
    IdeaBoardPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    IdeaBoardPageRoutingModule,
    PageBuilderKitModule,
    IdeaBoardModule,
    ButtonModule,
    CommonUiKitModule,
    InputModule,
    PipesModule,
    ScrollToModule,
  ]
})
export class IdeaBoardPageModule {
}
