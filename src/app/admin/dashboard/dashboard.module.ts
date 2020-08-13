import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { CardsModule } from '../../shared/cards/cards.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { PendingProjectComponent } from './pending-project/pending-project.component';
import { RevenueGrowthGraphComponent } from './revenue-growth-graph/revenue-growth-graph.component';
import { RevenueByTypeGraphComponent } from './revenue-by-type-graph/revenue-by-type-graph.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ScheduleItemComponent,
    PendingProjectComponent,
    RevenueGrowthGraphComponent,
    RevenueByTypeGraphComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AvatarModule,
    PipesModule,
    CommonUiKitModule,
    CardsModule,
    NgxChartsModule
  ]
})
export class DashboardModule {
}
