import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCbydComponent } from './project-cbyd.component';

const routes: Routes = [
  {
    path: '', component: ProjectCbydComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCbydRoutingModule { }
