import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  @Input() user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToCustomerProfilePage() {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.customers, this.user.id]);
  }

}
