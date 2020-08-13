import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  ROUTES = ROUTES;
  user$ = this.authService.user$;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
