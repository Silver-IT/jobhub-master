import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { IdeaBoardViewRoutingModule } from './idea-board-view-routing.module';
import { IdeaBoardViewComponent } from './idea-board-view.component';

@NgModule({
  declarations: [
    IdeaBoardViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IdeaBoardViewRoutingModule,
    IdeaBoardModule.forRoot(),
    InputModule,
    CommonUiKitModule,
  ]
})
export class IdeaBoardViewModule {
}
