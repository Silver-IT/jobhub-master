import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatioPackagesComponent } from './patio-packages.component';
import { PackageContentComponent } from './package-content/package-content.component';

const routes: Routes = [
  {
    path: '', component: PatioPackagesComponent,
    children: [
      {
        path: ':id', component: PackageContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatioPackagesRoutingModule { }
