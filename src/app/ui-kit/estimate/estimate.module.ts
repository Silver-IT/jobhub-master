import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../input/input.module';
import { PipesModule } from '../pipes/pipes.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { EstimateFormComponent } from './estimate-form/estimate-form.component';

@NgModule({
  declarations: [
    EstimateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    PipesModule,
    CommonUiKitModule
  ],
  exports: [
    EstimateFormComponent
  ],
})
export class EstimateModule { }
