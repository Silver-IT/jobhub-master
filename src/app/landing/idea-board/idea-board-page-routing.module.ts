import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaBoardPageComponent } from './idea-board-page.component';

const routes: Routes = [
  {
    path: '', component: IdeaBoardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaBoardPageRoutingModule { }
