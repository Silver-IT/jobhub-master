import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ContractorsResolver } from '../../core/resolvers/contractors.resolver';
import { ROUTES } from '../../core/data/routes';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    resolve: { contractors: ContractorsResolver }
  },
  {
    path: ROUTES.common.create,
    loadChildren: () => import('./project-create/project-create.module').then(m => m.ProjectCreateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
