import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { confirmPasswordValidator } from '../../core/utils/validators.util';
import { ROUTES } from '../../core/data/routes';
import { CustomerSignupWizardService } from '../../core/services/customer-signup-wizard.service';
import { CustomerService } from '../../core/services/customer.service';
import { ToastrService } from '../../core/services/toastr.service';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../ui-kit/alert/alert.service';
import { LogRocketService } from '../../core/services/log-rocket.service';

@Component({
  selector: 'job-hub-customer-register-dialog',
  templateUrl: './customer-register-dialog.component.html',
  styleUrls: ['./customer-register-dialog.component.scss'],
})
export class CustomerRegisterDialogComponent implements OnInit {

  ROUTES = ROUTES;
  isLoading = false;
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    terms: [false, Validators.requiredTrue]
  });

  constructor(
    public dialogRef: MatDialogRef<CustomerRegisterDialogComponent>,
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private alert: AlertService,
    private datePipe: DatePipe,
    private logRocketService: LogRocketService
  ) {
  }

  ngOnInit(): void {
  }

  async register() {
    try {
      this.isLoading = true;
      const ideas = this.customerSignupWizardService.getFromStorage('ideas') || [];
      const user = { ...this.form.value, ideas };
      const response = await this.customerService.register({ projects: [], user }).toPromise();
      this.authService.authenticateUser(response.accessToken);
      this.authService.decodeToken().then(token => this.logRocketService.login(token));
      const firstName = user.firstName;
      this.dialogRef.close();
      this.alert.alert(
        `Welcome ${firstName}`,
        `
         <p class="px-30">Your account has successfully been created.</p>
         <p class="px-30">In the mean time, you can continue to get ideas from our <span class="text-primary font-weight-medium">idea board</span> and <span class="text-primary font-weight-medium">portfolio project</span> section.</p>
        `
      );
      this.customerSignupWizardService.clearStorage();
      this.router.navigate([ROUTES.app.root, ROUTES.app.myProjects]);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to register your account. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
