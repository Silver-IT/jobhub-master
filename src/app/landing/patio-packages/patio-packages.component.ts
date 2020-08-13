import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { patioPackageCards } from '../../core/data/patio-packages';
import { PatioPackage } from '../../core/models/patio-package';
import { ScrollPosition } from '../../core/data/scroll-pos';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-patio-packages',
  templateUrl: './patio-packages.component.html',
  styleUrls: ['./patio-packages.component.scss']
})
export class PatioPackagesComponent implements OnInit, OnDestroy {

  patioPackageCards = patioPackageCards;
  ScrollPosition = ScrollPosition;

  private sessionId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollToService: ScrollToService,
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.PatioPackagesPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.PatioPackagesPage, this.sessionId);
  }

  navigateTo(id: PatioPackage) {
    this.scrollToService.scrollTo({ target: ScrollPosition.PatioPackageContent });
    this.router.navigate([id], {relativeTo: this.route});
  }

}
