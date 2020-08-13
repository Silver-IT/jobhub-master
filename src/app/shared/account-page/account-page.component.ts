import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { AuthService } from '../../core/services/auth.service';
import { User, UserRole } from '../../core/models/auth';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'job-hub-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  ROUTES = ROUTES;
  UserRole = UserRole;
  user$ = this.authService.user$;
  user = this.route.snapshot.data.user;
  isLoading = false;

  menus = [
    {label: 'Projects', route: [ROUTES.common.account.projectsSetting], roles: [UserRole.Customer]},
    {label: 'Account Settings', route: [ROUTES.common.account.accountSetting]},
    {label: 'User Management', route: [ROUTES.common.account.userManagement], roles: [UserRole.SuperAdmin]},
    {label: 'Payment Settings', route: [ROUTES.common.account.paymentSetting]},
    {label: 'User Sessions', route: [ROUTES.common.account.logRocket], roles: [UserRole.SuperAdmin, UserRole.Contractor]},
  ];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async uploadAvatar(avatar: string, user: User) {
    try {
      this.isLoading = true;
      const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        avatar
      };
      await this.authService.updateProfile(payload).toPromise();
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to update your profile image. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
