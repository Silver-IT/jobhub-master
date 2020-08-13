import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsSettingComponent } from './projects-setting.component';

const routes: Routes = [
  {
    path: '', component: ProjectsSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsSettingRoutingModule { }
