import { Component, OnDestroy, OnInit } from '@angular/core';

import { BlogService } from '../../core/services/blog.service';
import { ROUTES } from '../../core/data/routes';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ROUTES = ROUTES;
  posts = [];

  private sessionId: string;

  constructor(
    private blogService: BlogService,
    private marketingService: MarketingService
  ) { }

  async ngOnInit() {
    this.posts = this.blogService.getRecentPosts();
    this.sessionId = await this.marketingService.pageVisit(PageName.HomePage);
  }

  ngOnDestroy() {
    this.marketingService.pageVisit(PageName.HomePage, this.sessionId);
  }

}
