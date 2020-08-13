import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';

import { LandingLayoutComponent } from '../layout/landing-layout/landing-layout.component';

const routes: Routes = [
  {
    path: '', component: LandingLayoutComponent, children: [
      {
        path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }, {
        path: ROUTES.landingPages.about, loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }, {
        path: ROUTES.landingPages.patioPackages, loadChildren: () => import('./patio-packages/patio-packages.module').then(m => m.PatioPackagesModule)
      }, {
        path: ROUTES.landingPages.whyChooseUs.root, loadChildren: () => import('./why-choose-us/why-choose-us.module').then(m => m.WhyChooseUsModule)
      }, {
        path: ROUTES.landingPages.ideaBoard, loadChildren: () => import('./idea-board/idea-board-page.module').then(m => m.IdeaBoardPageModule)
      }, {
        path: ROUTES.landingPages.services.root, loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      }, {
        path: ROUTES.landingPages.contact, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }, {
        path: ROUTES.landingPages.requestEstimate, loadChildren: () => import('./request-estimate/request-estimate.module').then(m => m.RequestEstimateModule)
      }, {
        path: ROUTES.landingPages.hiring, loadChildren: () => import('./hiring/hiring.module').then(m => m.HiringModule)
      }, {
        path: ROUTES.landingPages.blog, loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      }, {
        path: ROUTES.landingPages.privacy, loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule)
      }, {
        path: ROUTES.landingPages.legalNotice, loadChildren: () => import('./legal-notice/legal-notice.module').then(m => m.LegalNoticeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
