import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectManagementComponent } from './project-management.component';

const routes: Routes = [
  {
    path: '', component: ProjectManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
