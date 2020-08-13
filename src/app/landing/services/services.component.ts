import { Component, OnDestroy, OnInit } from '@angular/core';

import { ROUTES } from '../../core/data/routes';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  categories = [
    { name: 'Patios', link: ROUTES.landingPages.services.patios },
    { name: 'Walkways', link: ROUTES.landingPages.services.walkways },
    { name: 'Retaining Walls', link: ROUTES.landingPages.services.retainingWalls },
    { name: 'Driveways', link: ROUTES.landingPages.services.driveways },
    { name: 'Pool Patios', link: ROUTES.landingPages.services.poolPatios },
    { name: 'Complete Transformations', link: ROUTES.landingPages.services.completeTransformations },
    { name: 'Design Services', link: ROUTES.landingPages.services.designServices },
    { name: 'Steps & Staircases', link: ROUTES.landingPages.services.stepsAndStaircases },
    { name: 'Inlays & Borders', link: ROUTES.landingPages.services.inlaysAndBorders },
    { name: 'Pavers VS Concrete', link: ROUTES.landingPages.services.paversVsConcrete }
  ];

  private sessionId: string;

  constructor(
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.ServicesPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, this.sessionId);
  }
}
