import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { MapModule } from '../../ui-kit/map/map.module';

import { MarketingRoutingModule } from './marketing-routing.module';

import { MarketingComponent } from './marketing.component';

import { PageVisitOverviewPanelComponent } from './page-visit-overview-panel/page-visit-overview-panel.component';
import { OverallTrafficPanelComponent } from './overall-traffic-panel/overall-traffic-panel.component';
import { CustomerMapPanelComponent } from './customer-map-panel/customer-map-panel.component';

@NgModule({
  declarations: [
    MarketingComponent,
    PageVisitOverviewPanelComponent,
    OverallTrafficPanelComponent,
    CustomerMapPanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MarketingRoutingModule,
    CommonUiKitModule,
    PipesModule,
    ButtonModule,
    InputModule,
    MapModule
  ]
})
export class MarketingModule { }
