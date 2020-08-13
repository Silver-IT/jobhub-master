import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LeadsRoutingModule } from './leads-routing.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { LeadTableModule } from '../../ui-kit/table/lead-table/lead-table.module';
import { LeadsComponent } from './leads.component';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';


@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    LeadTableModule,
    LeadsRoutingModule,
    PipesModule
  ]
})
export class LeadsModule { }
