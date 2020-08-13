import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../../core/data/routes';

import { WhyChooseUsComponent } from './why-choose-us.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { InstallationProcessComponent } from './installation-process/installation-process.component';

const routes: Routes = [
  {
    path: '', component: WhyChooseUsComponent,
    children: [
      {
        path: '', redirectTo: ROUTES.landingPages.whyChooseUs.projectManagement, pathMatch: 'full'
      },
      {
        path: ROUTES.landingPages.whyChooseUs.projectManagement, component: ProjectManagementComponent
      },
      {
        path: ROUTES.landingPages.whyChooseUs.installationProcess, component: InstallationProcessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyChooseUsRoutingModule { }
