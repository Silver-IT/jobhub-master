import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTableModule } from '../../ui-kit/table/project-table/project-table.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ProjectTableModule
  ]
})
export class PortfolioModule {
}
