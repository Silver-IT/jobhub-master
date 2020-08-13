import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectOrderMaterialComponent } from './project-order-material.component';

const routes: Routes = [
  {
    path: '', component: ProjectOrderMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectOrderMaterialRoutingModule { }
