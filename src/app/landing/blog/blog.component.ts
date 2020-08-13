import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'job-hub-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blog = this.blogService.getRecentPosts();
  }

}
