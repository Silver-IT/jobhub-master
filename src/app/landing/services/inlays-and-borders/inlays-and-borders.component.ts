import { Component, OnDestroy, OnInit } from '@angular/core';

import { MarketingService } from '../../../core/services/marketing.service';
import { PageName } from '../../../core/models/page-name';

const PageSubName = 'INLAY_AND_BORDERS';

@Component({
  selector: 'job-hub-inlays-and-borders',
  templateUrl: './inlays-and-borders.component.html',
  styleUrls: ['./inlays-and-borders.component.scss']
})
export class InlaysAndBordersComponent implements OnInit, OnDestroy {

  isLoading = false;
  ideas = [
    [
      { url: 'assets/images/landing-page/services/inlay-and-borders/1.jpg', flex: 2 },
      { url: 'assets/images/landing-page/services/inlay-and-borders/2.jpg', flex: 1 },
    ],
    [
      { url: 'assets/images/landing-page/services/inlay-and-borders/3.jpg', flex: 1 },
      { url: 'assets/images/landing-page/services/inlay-and-borders/4.jpg', flex: 1 },
      { url: 'assets/images/landing-page/services/inlay-and-borders/5.jpg', flex: 1 },
    ],
    [
      { url: 'assets/images/landing-page/services/inlay-and-borders/6.jpg', flex: 1 },
      { url: 'assets/images/landing-page/services/inlay-and-borders/7.jpg', flex: 2 },
    ]
  ];

  private sessionId: string;

  constructor(
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, null, PageSubName).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, this.sessionId, PageSubName);
  }

}
