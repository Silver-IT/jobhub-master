import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MapService } from '../../../ui-kit/map/map.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { ROUTES } from '../../../core/data/routes';
import { ToastrService } from '../../../core/services/toastr.service';
import { PatioPackage } from '../../../core/models/patio-package';
import { patioPackageOptions } from '../../../core/data/patio-packages';
import { enumToOptions } from '../../../core/utils/enum.util';
import { CustomerService } from '../../../core/services/customer.service';
import { CustomerRegisterPayload } from '../../../core/models/auth';
import { AuthService } from '../../../core/services/auth.service';
import { confirmPasswordValidator } from '../../../core/utils/validators.util';
import { LogRocketService } from '../../../core/services/log-rocket.service';
import { LegalNoticeDialogComponent } from '../../legal-notice/legal-notice-dialog/legal-notice-dialog.component';
import { PrivacyDialogComponent } from '../../privacy/privacy-dialog/privacy-dialog.component';
import { SourceFoundUs } from '../../../core/models/base';

@Component({
  selector: 'job-hub-patio-package-register-dialog',
  templateUrl: './patio-package-register-dialog.component.html',
  styleUrls: ['./patio-package-register-dialog.component.scss'],
})
export class PatioPackageRegisterDialogComponent implements OnInit {

  ROUTES = ROUTES;
  form: FormGroup = this.fb.group({
    projects: [[]],
    user: this.fb.group({
      ideas: [[]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      latitude: null,
      longitude: null,
    }),
    patioPackage: this.fb.group({
      packageType: [this.data, Validators.required],
      option: ['', Validators.required],
      additional: [[], Validators.required],
    }),
    sourceFoundUs: ['', Validators.required],
    terms: false
  });

  packageTypeOptions = enumToOptions<PatioPackage>(PatioPackage);
  sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  options = [];
  additionalOptions = [];
  isSaving = false;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private alert: AlertService,
    private currencyPipe: CurrencyPipe,
    private mapService: MapService,
    private customerService: CustomerService,
    private authService: AuthService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: PatioPackage,
    private dialogRef: MatDialogRef<PatioPackageRegisterDialogComponent>,
    private router: Router,
    private logRocketService: LogRocketService,
  ) { }

  ngOnInit(): void {
    this.mapService.getCurrentLocation().then(res => {
      this.form.get('user').get('address').setValue(res.address);
      this.form.get('user').get('latitude').setValue(res.latitude);
      this.form.get('user').get('longitude').setValue(res.longitude);
    });
    const option = patioPackageOptions[this.data] as any;
    if (option.options) {
      this.form.get('patioPackage').get('option').setValidators(Validators.required);
      this.form.get('patioPackage').get('additional').setValidators(Validators.required);
      this.options = option.options.map(x => (
        {
          label: `${x.label} ${this.currencyPipe.transform(x.price, 'USD', 'symbol-narrow', '4.0-0')}`,
          value: x.value
        })
      );
      this.options.push({label: 'Other', value: 'OTHER'});
      this.additionalOptions = option.additional;
    } else {
      this.options = null;
      this.additionalOptions = null;
      this.form.get('patioPackage').get('option').clearValidators();
      this.form.get('patioPackage').get('additional').clearValidators();
    }
  }

  async register() {
    try {
      if (!this.form.get('terms').value) {
        this.toastr.info('Please agree to the terms of service and privacy and policy');
        return;
      }
      this.isSaving = true;
      const payload: CustomerRegisterPayload = this.form.value;
      const response = await this.customerService.register(payload).toPromise();
      this.authService.authenticateUser(response.accessToken);
      this.authService.decodeToken().then(token => this.logRocketService.login(token));
      const firstName = payload.user.firstName;
      this.dialogRef.close();
      this.alert.alert(
        `Welcome ${firstName}`,
        `
         <p class="px-30">Thank you for submitting your project a project consultant will reach out to you within 24 hours to provide an estimate and coordinate a site visit.</p>
         <p class="px-30">In the mean time please check out our <span class="text-primary font-weight-medium">idea board</span> to view styles and colors available for your project.</p>
        `
      );
      this.router.navigate([ROUTES.app.root, ROUTES.app.myProjects]);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to schedule a consultation. Please try again later.');
    } finally {
      this.isSaving = false;
    }
  }

  showLegalNoticeDialog($event) {
    $event.preventDefault();
    this.dialog.open(LegalNoticeDialogComponent, {
      panelClass: 'full-panel',
    });
  }

  showPrivacyDialog($event) {
    $event.preventDefault();
    this.dialog.open(PrivacyDialogComponent, {
      panelClass: 'full-panel',
    });
  }

}
