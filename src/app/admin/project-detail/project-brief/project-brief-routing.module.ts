import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectBriefComponent } from './project-brief.component';

const routes: Routes = [
  {
    path: '', component: ProjectBriefComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBriefRoutingModule { }
