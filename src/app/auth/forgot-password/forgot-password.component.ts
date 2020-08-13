import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ROUTES } from '../../core/data/routes';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'job-hub-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  ROUTES = ROUTES;
  isLoading = false;
  hasSent = false;
  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async sendEmail() {
    try {
      this.isLoading = true;
      await this.authService.forgotPassword(this.forgotPasswordForm.value.email).toPromise();
      this.toastr.info(`We've sent an email to your email address. Please check your inbox to reset your password.`);
      this.hasSent = true;
    } catch (e) {
      this.toastr.error(e, 'Failed to send an email to your account. Please try again later.');
    } finally {
      this.isLoading = false;
    }
  }

}
