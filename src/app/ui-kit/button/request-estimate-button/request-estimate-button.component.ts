import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ROUTES, toAbsolutePath } from '../../../core/data/routes';
import { ScrollPosition } from '../../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-request-estimate-button',
  templateUrl: './request-estimate-button.component.html',
  styleUrls: ['./request-estimate-button.component.scss']
})
export class RequestEstimateButtonComponent implements OnInit {

  @Input() center = true;

  path = toAbsolutePath(ROUTES.landingPages.requestEstimate);

  constructor(
    private router: Router,
    private scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl(this.path).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

}
