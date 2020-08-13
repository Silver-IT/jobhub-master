import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadDetailComponent } from './lead-detail.component';

const routes: Routes = [
  {
    path: '', component: LeadDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadDetailRoutingModule { }
