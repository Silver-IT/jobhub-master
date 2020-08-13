import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'job-hub-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  blog = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blog = this.blogService.getRecentPosts();
  }

}
