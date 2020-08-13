import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  user: Customer = this.route.snapshot.data.user;

  menus = [
    {label: 'Projects', route: [ROUTES.common.account.projectsSetting]},
    {label: 'Account Settings', route: [ROUTES.common.account.accountSetting]},
    {label: 'Contracts', route: [ROUTES.common.account.contracts]},
    {label: 'Sessions', route: [ROUTES.common.account.logRocket]},
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
