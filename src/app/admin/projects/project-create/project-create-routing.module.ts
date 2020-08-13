import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCreateComponent } from './project-create.component';
import { CustomersResolver } from '../../../core/resolvers/customers.resolver';

const routes: Routes = [
  {
    path: '', component: ProjectCreateComponent,
    resolve: {
      customers: CustomersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCreateRoutingModule {
}
