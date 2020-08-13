import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  navigateUserProfilePage(id: string) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}
