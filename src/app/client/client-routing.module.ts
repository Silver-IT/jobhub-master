import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '../core/data/routes';
import { AuthGuard } from '../core/guards/auth.guard';
import { UserResolver } from '../core/resolvers/user.resolver';

import { ClientLayoutComponent } from '../layout/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      {path: '', redirectTo: ROUTES.app.myProjects, pathMatch: 'full'},
      {
        path: ROUTES.app.myProjects,
        loadChildren: () => import('./my-projects/my-projects.module').then(m => m.MyProjectsModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.app.project + '/:id',
        loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule),
        canActivate: [AuthGuard],
        // project id resolver will be done in guard format inside module
      },
      {
        path: ROUTES.app.createProject,
        loadChildren: () => import('./create-project/create-project.module').then(m => m.CreateProjectModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.app.ideaBoard,
        loadChildren: () => import('./idea-board-view/idea-board-view.module').then(m => m.IdeaBoardViewModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.app.portfolioProjects,
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.app.networkContractors,
        loadChildren: () => import('./network-contractors/network-contractors.module').then(m => m.NetworkContractorsModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.common.account.root,
        loadChildren: () => import('../shared/account-page/account-page.module').then(m => m.AccountPageModule),
        canActivate: [AuthGuard],
        resolve: {user: UserResolver}
      },
      {
        path: ROUTES.common.notifications,
        loadChildren: () => import('../shared/notifications-page/notifications-page.module').then(m => m.NotificationsPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.common.inbox,
        loadChildren: () => import('../shared/inbox-page/inbox-page.module').then(m => m.InboxPageModule),
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
