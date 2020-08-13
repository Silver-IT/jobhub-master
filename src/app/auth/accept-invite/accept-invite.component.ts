import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { confirmPasswordValidator } from '../../core/utils/validators.util';
import { ROUTES } from '../../core/data/routes';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';
import { LogRocketService } from '../../core/services/log-rocket.service';

@Component({
  selector: 'job-hub-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.scss']
})
export class AcceptInviteComponent implements OnInit {

  ROUTES = ROUTES;
  isLoading = false;

  form: FormGroup = this.fb.group({
    temporaryPassword: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    token: this.route.snapshot.params.token
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private logRocketService: LogRocketService
  ) {
  }

  ngOnInit(): void {
  }

  async acceptInvite() {
    try {
      this.isLoading = true;
      const res = await this.authService.acceptInvitation(this.form.value).toPromise();
      this.toastr.success('Your request is successfully sent. Please login with your email and new password!');
      this.authService.authenticateUser(res.accessToken);
      const token = await this.authService.decodeToken();
      this.logRocketService.login(token);
      this.authService.navigateByUserRole(token.role);
    } catch (e) {
      this.toastr.error(e, 'Sorry, something went wrong. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
