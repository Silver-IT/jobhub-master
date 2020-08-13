import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [BlogComponent, ArticleListComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    PageBuilderKitModule
  ]
})
export class BlogModule { }
