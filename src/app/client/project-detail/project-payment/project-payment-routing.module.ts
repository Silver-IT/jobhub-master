import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPaymentComponent } from './project-payment.component';

const routes: Routes = [
  {
    path: '', component: ProjectPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPaymentRoutingModule { }
