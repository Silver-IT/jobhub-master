import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCustomerActivityComponent } from './project-customer-activity.component';

const routes: Routes = [
  {
    path: '', component: ProjectCustomerActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCustomerActivityRoutingModule { }
