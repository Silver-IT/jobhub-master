import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectFinalProposalComponent } from './project-final-proposal.component';

const routes: Routes = [
  {
    path: '', component: ProjectFinalProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFinalProposalRoutingModule { }
