import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { WhyChooseUsRoutingModule } from './why-choose-us-routing.module';

import { WhyChooseUsComponent } from './why-choose-us.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { InstallationProcessComponent } from './installation-process/installation-process.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    WhyChooseUsComponent,
    ProjectManagementComponent,
    InstallationProcessComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    WhyChooseUsRoutingModule,
    PageBuilderKitModule,
    ButtonModule,
    SwiperModule,
    ScrollToModule,
    PipesModule
  ]
})
export class WhyChooseUsModule {
}
