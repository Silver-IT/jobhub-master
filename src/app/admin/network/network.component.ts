import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  ROUTES = ROUTES;
  categories = this.route.snapshot.data.categories;
  dictCategories = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  navigateToContractorDetail(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root, id]);
  }

  navigateToCategoryDetail(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.network.root, ROUTES.admin.network.category, id]);
  }
}
