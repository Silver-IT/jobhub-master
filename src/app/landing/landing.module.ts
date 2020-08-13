import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from '../ui-kit/alert/alert.module';
import { LandingLayoutModule } from '../layout/landing-layout/landing-layout.module';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingLayoutModule,
    AlertModule,
  ]
})
export class LandingModule { }
