import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';

import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingLayoutComponent } from './landing-layout.component';

@NgModule({
  declarations: [
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingNavbarComponent,
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ButtonModule,
    NgbDropdownModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    LandingLayoutComponent
  ]
})
export class LandingLayoutModule {
}
