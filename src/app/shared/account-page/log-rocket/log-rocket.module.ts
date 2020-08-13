import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../../ui-kit/input/input.module';
import { LogRocketTableModule } from '../../../ui-kit/table/log-rocket-table/log-rocket-table.module';

import { LogRocketRoutingModule } from './log-rocket-routing.module';
import { LogRocketComponent } from './log-rocket.component';

@NgModule({
  declarations: [
    LogRocketComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogRocketRoutingModule,
    InputModule,
    LogRocketTableModule
  ]
})
export class LogRocketModule { }
