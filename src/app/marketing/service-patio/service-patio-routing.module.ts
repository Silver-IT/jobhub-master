import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicePatioComponent } from './service-patio.component';

const routes: Routes = [
  {
    path: '', component: ServicePatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePatioRoutingModule { }
