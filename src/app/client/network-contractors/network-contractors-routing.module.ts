import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkContractorsComponent } from './network-contractors.component';

const routes: Routes = [
  {
    path: '', component: NetworkContractorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkContractorsRoutingModule { }
