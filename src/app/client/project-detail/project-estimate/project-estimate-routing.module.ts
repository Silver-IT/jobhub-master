import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectEstimateComponent } from './project-estimate.component';

const routes: Routes = [
  {
    path: '', component: ProjectEstimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEstimateRoutingModule { }
