import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';

const routes: Routes = [
  {
    path: ROUTES.marketingPages.servicePatio,
    loadChildren: () => import('./service-patio/service-patio.module').then(m => m.ServicePatioModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
