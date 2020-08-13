import { Component, OnDestroy, OnInit } from '@angular/core';

import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit, OnDestroy {

  private sessionId: string;

  constructor(
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.LegalNoticePage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.LegalNoticePage, this.sessionId);
  }

}
