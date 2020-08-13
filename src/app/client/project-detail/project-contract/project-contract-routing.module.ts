import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectContractComponent } from './project-contract.component';

const routes: Routes = [
  {
    path: '', component: ProjectContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectContractRoutingModule { }
