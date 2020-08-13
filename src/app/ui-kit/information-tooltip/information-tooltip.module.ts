import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { InformationTooltipComponent } from './information-tooltip.component';

@NgModule({
  declarations: [
    InformationTooltipComponent
  ],
  imports: [
    CommonModule,
    NgbPopoverModule
  ],
  exports: [
    InformationTooltipComponent
  ]
})
export class InformationTooltipModule { }
