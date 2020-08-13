import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../ui-kit/input/input.module';
import { ProjectTableModule } from '../../ui-kit/table/project-table/project-table.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { LeadTableModule } from '../../ui-kit/table/lead-table/lead-table.module';
import { CardsModule } from '../../shared/cards/cards.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ProjectsRoutingModule,
    ProjectTableModule,
    LeadTableModule,
    PipesModule,
    ButtonModule,
    CardsModule,
  ]
})
export class ProjectsModule {
}
