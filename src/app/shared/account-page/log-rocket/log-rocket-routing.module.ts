import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRocketComponent } from './log-rocket.component';

const routes: Routes = [
  {
    path: '', component: LogRocketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRocketRoutingModule { }
