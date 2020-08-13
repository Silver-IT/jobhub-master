import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestEstimateComponent } from './request-estimate.component';

const routes: Routes = [
  {
    path: '', component: RequestEstimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestEstimateRoutingModule { }
