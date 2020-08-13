import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from './core/data/routes';
import { UserResolver } from './core/resolvers/user.resolver';
import { FinalProposalByProjectIdResolver } from './core/resolvers/final-proposal-by-project-id.resolver';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/auth';

import { RedirectComponent } from './shared/redirect/redirect.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '', loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: ROUTES.app.root, loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    resolve: {user: UserResolver},
    canActivate: [RoleGuard],
    data: {
      roles: [UserRole.Customer]
    }
  },
  {
    path: ROUTES.admin.root, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    resolve: {user: UserResolver},
    canActivate: [RoleGuard],
    data: {
      roles: [UserRole.Contractor, UserRole.SuperAdmin]
    }
  },
  {
    path: ROUTES.redirect + '/:payload',
    component: RedirectComponent
  },
  {
    path: '**', redirectTo: ROUTES.auth.login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FinalProposalByProjectIdResolver]
})
export class AppRoutingModule { }
