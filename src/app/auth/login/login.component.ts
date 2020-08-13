import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ROUTES } from '../../core/data/routes';
import { ToastrService } from '../../core/services/toastr.service';
import { AuthService } from '../../core/services/auth.service';
import { LogRocketService } from '../../core/services/log-rocket.service';

@Component({
  selector: 'job-hub-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ROUTES = ROUTES;

  isLoading = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private logRocketService: LogRocketService
  ) {
  }

  ngOnInit(): void {
  }

  async login() {
    try {
      this.isLoading = true;
      const value = this.loginForm.value;
      await this.authService.login(value.email, value.password).toPromise();
      const token = await this.authService.decodeToken();
      this.logRocketService.login(token);
      this.authService.navigateByUserRole(token.role);
      this.toastr.success(`You've successfully logged in.`);
    } catch (e) {
      this.toastr.danger(`Invalid email or password. Please try again.`);
    } finally {
      this.isLoading = false;
    }
  }

}
