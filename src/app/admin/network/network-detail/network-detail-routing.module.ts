import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworkDetailComponent } from './network-detail.component';


const routes: Routes = [
  {
    path: '', component: NetworkDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkDetailRoutingModule {
}
