import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { InlaysAndBordersComponent } from './inlays-and-borders/inlays-and-borders.component';
import { PaversVsConcretComponent } from './pavers-vs-concret/pavers-vs-concret.component';
import { PaversVsConcretItemCardComponent } from './pavers-vs-concret-item-card/pavers-vs-concret-item-card.component';
import { GenericServiceDetailComponent } from './generic-service-detail/generic-service-detail.component';

@NgModule({
  declarations: [
    ServicesComponent,
    InlaysAndBordersComponent,
    PaversVsConcretComponent,
    PaversVsConcretItemCardComponent,
    GenericServiceDetailComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ScrollToModule.forRoot(),
    PageBuilderKitModule,
    ButtonModule,
    PipesModule,
    IdeaBoardModule,
    CommonUiKitModule
  ]
})
export class ServicesModule {
}
