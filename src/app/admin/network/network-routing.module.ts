import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworkComponent } from './network.component';
import { ROUTES } from '../../core/data/routes';
import { NetworkContractorByIdResolver } from '../../core/resolvers/network-contractor-by-id.resolver';
import { NetworkContractorCategoryByIdResolver } from '../../core/resolvers/network-contractor-category-by-id.resolver';
import { NetworkContractorCategoriesResolver } from '../../core/resolvers/network-contractor-categories.resolver';

const routes: Routes = [
  {
    path: '', component: NetworkComponent,
  },
  {
    path: ROUTES.admin.network.category + '/' + ROUTES.admin.network.create,
    loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailModule),
  },
  {
    path: ROUTES.admin.network.category + '/:id',
    loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailModule),
    resolve: {category: NetworkContractorCategoryByIdResolver},
  },
  {
    path: ROUTES.admin.network.create,
    loadChildren: () => import('./network-detail/network-detail.module').then(m => m.NetworkDetailModule),
    resolve: {categories: NetworkContractorCategoriesResolver}
  },
  {
    path: ':id',
    loadChildren: () => import('./network-detail/network-detail.module').then(m => m.NetworkDetailModule),
    resolve: {contractor: NetworkContractorByIdResolver, categories: NetworkContractorCategoriesResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule {
}
