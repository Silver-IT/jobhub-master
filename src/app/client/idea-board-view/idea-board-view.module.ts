import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../ui-kit/input/input.module';
import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { IdeaBoardViewRoutingModule } from './idea-board-view-routing.module';

import { IdeaBoardViewComponent } from './idea-board-view.component';

@NgModule({
  declarations: [
    IdeaBoardViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IdeaBoardViewRoutingModule,
    InputModule,
    IdeaBoardModule,
    PipesModule
  ]
})
export class IdeaBoardViewModule { }
