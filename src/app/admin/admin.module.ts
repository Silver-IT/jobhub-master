import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutModule } from '../layout/admin-layout/admin-layout.module';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
