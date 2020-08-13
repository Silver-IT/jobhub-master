import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TableModule } from '../table.module';
import { AvatarModule } from '../../avatar/avatar.module';

import { LogRocketTableComponent } from './log-rocket-table.component';

@NgModule({
  declarations: [
    LogRocketTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    TableModule,
    AvatarModule
  ],
  exports: [
    LogRocketTableComponent
  ]
})
export class LogRocketTableModule { }
