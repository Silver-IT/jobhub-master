import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PageBuilderKitModule,
    PipesModule
  ]
})
export class AboutModule { }
