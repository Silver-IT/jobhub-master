import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}
