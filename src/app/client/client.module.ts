import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutModule } from '../layout/client-layout/client-layout.module';

import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientLayoutModule
  ]
})
export class ClientModule { }
