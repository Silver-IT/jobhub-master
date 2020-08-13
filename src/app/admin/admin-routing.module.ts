import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { UserResolver } from '../core/resolvers/user.resolver';
import { LeadByIdResolver } from '../core/resolvers/lead-by-id.resolver';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: ROUTES.admin.dashboard, pathMatch: 'full'},
      {
        path: ROUTES.admin.dashboard,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.schedule,
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.projects,
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.projects + '/:id',
        loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule),
        canActivate: [AuthGuard]
        // project id resolver will be done in guard format inside module
      },
      {
        path: ROUTES.admin.customers,
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.ideaBoard,
        loadChildren: () => import('./idea-board-view/idea-board-view.module').then(m => m.IdeaBoardViewModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.network.root,
        loadChildren: () => import('./network/network.module').then(m => m.NetworkModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.hiring,
        loadChildren: () => import('./hiring/hiring.module').then(m => m.HiringModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.marketing,
        loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.common.account.root,
        loadChildren: () => import('../shared/account-page/account-page.module').then(m => m.AccountPageModule),
        canActivate: [AuthGuard],
        resolve: {user: UserResolver},
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
      {
        path: ROUTES.admin.search,
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.leads,
        loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule),
        canActivate: [AuthGuard]
      },
      {
        path: ROUTES.admin.leads + '/:id',
        loadChildren: () => import('./lead-detail/lead-detail.module').then(m => m.LeadDetailModule),
        resolve: {lead: LeadByIdResolver},
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
