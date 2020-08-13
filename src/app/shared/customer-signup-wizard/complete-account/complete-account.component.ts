import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ROUTES } from '../../../core/data/routes';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { confirmPasswordValidator } from '../../../core/utils/validators.util';
import { LegalNoticeDialogComponent } from '../../../landing/legal-notice/legal-notice-dialog/legal-notice-dialog.component';
import { PrivacyDialogComponent } from '../../../landing/privacy/privacy-dialog/privacy-dialog.component';
import { enumToOptions } from '../../../core/utils/enum.util';
import { SourceFoundUs } from '../../../core/models/base';

@Component({
  selector: 'job-hub-complete-account',
  templateUrl: './complete-account.component.html',
  styleUrls: ['./complete-account.component.scss']
})
export class CompleteAccountComponent implements OnInit {

  ROUTES = ROUTES;
  sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);

  form: FormGroup = this.fb.group({
    user: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
      terms: [false, Validators.requiredTrue]
    }),
    sourceFoundUs: ['', Validators.required]
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService
  ) {
  }

  ngOnInit(): void {
    const user = this.customerSignupWizardService.getFromStorage('user') || {};
    const sourceFoundUs = this.customerSignupWizardService.getFromStorage('sourceFoundUs') || '';
    const userForm = this.form.get('user');
    userForm.get('firstName').setValue(user.firstName || '');
    userForm.get('lastName').setValue(user.lastName || '');
    userForm.get('email').setValue(user.email || '');
    userForm.get('phone').setValue(user.phone || '');
    userForm.get('password').setValue(user.password || '');
    this.form.get('sourceFoundUs').setValue(sourceFoundUs);
    // we are not auto-populate confirm password field due to security problem
  }

  showLegalNoticeDialog($event) {
    $event.preventDefault();
    this.dialog.open(LegalNoticeDialogComponent, {
      panelClass: 'full-panel',
      closeOnNavigation: true
    });
  }

  showPrivacyDialog($event) {
    $event.preventDefault();
    this.dialog.open(PrivacyDialogComponent, {
      panelClass: 'full-panel',
      closeOnNavigation: true
    });
  }
}
