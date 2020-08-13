import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-customer-contracts',
  templateUrl: './customer-contracts.component.html',
  styleUrls: ['./customer-contracts.component.scss']
})
export class CustomerContractsComponent implements OnInit {

  ROUTES = ROUTES;
  user: Customer = this.route.parent.snapshot.data.user;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateToContractDetail(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, id, ROUTES.admin.project.contract]);
  }

}
