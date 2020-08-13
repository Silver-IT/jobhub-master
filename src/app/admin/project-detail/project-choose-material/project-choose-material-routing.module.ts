import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectChooseMaterialComponent } from './project-choose-material.component';

const routes: Routes = [
  {
    path: '', component: ProjectChooseMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectChooseMaterialRoutingModule { }
