import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../core/models/auth';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES } from 'src/app/core/data/routes';

@Component({
  selector: 'job-hub-customer-projects',
  templateUrl: './customer-projects.component.html',
  styleUrls: ['./customer-projects.component.scss']
})
export class CustomerProjectsComponent implements OnInit {

  user: Customer = this.route.parent.snapshot.data.user;

  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToProjectDetail(id: string) {
    this.router.navigate(['/', ROUTES.admin.root, ROUTES.admin.projects, id]);
  }
}
