import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCardComponent } from './status-card/status-card.component';



@NgModule({
  declarations: [StatusCardComponent],
  imports: [
    CommonModule
  ],
  exports: [StatusCardComponent]
})
export class CardsModule { }
