import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectEmailActivityComponent } from './project-email-activity.component';


const routes: Routes = [
  { path: '', component: ProjectEmailActivityComponent },
  {
    path: ':id',
    component: ProjectEmailActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEmailActivityRoutingModule {
}
