import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectLeadModule } from '../../shared/project-lead/project-lead.module';
import { LeadDetailRoutingModule } from './lead-detail-routing.module';
import { LeadDetailComponent } from './lead-detail.component';

@NgModule({
  declarations: [
    LeadDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectLeadModule,
    LeadDetailRoutingModule
  ]
})
export class LeadDetailModule { }
