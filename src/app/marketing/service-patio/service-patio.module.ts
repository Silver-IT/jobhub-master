import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { ServicePatioRoutingModule } from './service-patio-routing.module';

import { ServicePatioComponent } from './service-patio.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { JumbotronSectionComponent } from './jumbotron-section/jumbotron-section.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ServicePatioComponent,
    TestimonialSectionComponent,
    JumbotronSectionComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ServicePatioRoutingModule,
    PageBuilderKitModule,
    IdeaBoardModule,
    ButtonModule,
    PipesModule,
    SwiperModule,
    ScrollToModule
  ]
})
export class ServicePatioModule { }
