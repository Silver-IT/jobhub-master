import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../../../core/models/auth';

@Component({
  selector: 'job-hub-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.scss']
})
export class CustomerSessionsComponent implements OnInit {

  user: Customer = this.route.parent.snapshot.data.user;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
