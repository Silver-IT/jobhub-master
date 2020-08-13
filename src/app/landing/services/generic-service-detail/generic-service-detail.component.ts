import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ScrollPosition } from '../../../core/data/scroll-pos';
import { MarketingService } from '../../../core/services/marketing.service';
import { PageName } from '../../../core/models/page-name';

@Component({
  selector: 'job-hub-generic-service-detail',
  templateUrl: './generic-service-detail.component.html',
  styleUrls: ['./generic-service-detail.component.scss']
})
export class GenericServiceDetailComponent implements OnInit, OnDestroy {

  title = this.route.snapshot.data.title;
  description = this.route.snapshot.data.description;
  hasBeforeAfter = this.route.snapshot.data.hasBeforeAfter;
  moreLink = this.route.snapshot.data.moreLink;

  ideas: any[] = this.route.snapshot.data.ideas;

  private sessionId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scrollToService: ScrollToService,
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, null, this.route.snapshot.data.id).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, this.sessionId, this.route.snapshot.data.id);
  }

  navigateToIdeaBoard() {
    this.router.navigateByUrl(this.moreLink).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

}
