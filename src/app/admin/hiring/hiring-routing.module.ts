import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { HiringComponent } from './hiring.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobByIdResolver } from '../../core/resolvers/job-by-id.resolver';

const routes: Routes = [
  {
    path: '', component: HiringComponent
  }, {
    path: ROUTES.common.create, component: JobDetailComponent
  }, {
    path: ':id', component: JobDetailComponent,
    resolve: {job: JobByIdResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringRoutingModule { }
