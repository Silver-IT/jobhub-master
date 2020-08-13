import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaBoardViewComponent } from './idea-board-view.component';

const routes: Routes = [
  {
    path: '', component: IdeaBoardViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaBoardViewRoutingModule { }
