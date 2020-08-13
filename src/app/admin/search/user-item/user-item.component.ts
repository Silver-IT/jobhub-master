import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate() {
    if (this.user.role === UserRole.Customer) {
      this.router.navigate(['/', ROUTES.admin.root, ROUTES.admin.customers, this.user.id]);
    }
  }

}
