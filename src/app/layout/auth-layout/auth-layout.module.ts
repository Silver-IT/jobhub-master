import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutKitModule } from '../layout-kit/layout-kit.module';

import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutKitModule
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule { }
