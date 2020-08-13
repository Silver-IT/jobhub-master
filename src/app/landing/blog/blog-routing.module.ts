import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent, children: [
      {
        path: '', component: ArticleListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
