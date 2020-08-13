import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { landingPageServices } from '../../core/data/landing-page-services';
import { ServicesComponent } from './services.component';
import { InlaysAndBordersComponent } from './inlays-and-borders/inlays-and-borders.component';
import { PaversVsConcretComponent } from './pavers-vs-concret/pavers-vs-concret.component';
import { GenericServiceDetailComponent } from './generic-service-detail/generic-service-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '', redirectTo: ROUTES.landingPages.services.patios, pathMatch: 'full'
      },
      {
        path: ROUTES.landingPages.services.patios, component: GenericServiceDetailComponent,
        data: landingPageServices.patios
      },
      {
        path: ROUTES.landingPages.services.walkways, component: GenericServiceDetailComponent,
        data: landingPageServices.walkways
      },
      {
        path: ROUTES.landingPages.services.retainingWalls, component: GenericServiceDetailComponent,
        data: landingPageServices.retainingWalls
      },
      {
        path: ROUTES.landingPages.services.driveways, component: GenericServiceDetailComponent,
        data: landingPageServices.driveways
      },
      {
        path: ROUTES.landingPages.services.poolPatios, component: GenericServiceDetailComponent,
        data: landingPageServices.poolPatios
      },
      {
        path: ROUTES.landingPages.services.completeTransformations, component: GenericServiceDetailComponent,
        data: landingPageServices.completeTransformations
      },
      {
        path: ROUTES.landingPages.services.designServices, component: GenericServiceDetailComponent,
        data: landingPageServices.designServices
      },
      {
        path: ROUTES.landingPages.services.stepsAndStaircases, component: GenericServiceDetailComponent,
        data: landingPageServices.stepsAndStaircases
      },
      {
        path: ROUTES.landingPages.services.inlaysAndBorders,
        component: InlaysAndBordersComponent
      },
      {
        path: ROUTES.landingPages.services.paversVsConcrete,
        component: PaversVsConcretComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
