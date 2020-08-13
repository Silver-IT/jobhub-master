import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ROUTES } from '../../core/data/routes';
import { confirmPasswordValidator } from '../../core/utils/validators.util';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'job-hub-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  ROUTES = ROUTES;
  isLoading = false;
  token = '';
  resetPasswordForm: FormGroup = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
  }

  async changePassword() {
    try {
      this.isLoading = true;
      const value = this.resetPasswordForm.value;
      await this.authService.resetPassword(value.password, this.token).toPromise();
      this.toastr.info('Your password changed successfully. Please login with your new password.');
      this.router.navigate([ROUTES.auth.login]);
    } catch (e) {
      this.toastr.error(e, 'Failed to reset your password. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
