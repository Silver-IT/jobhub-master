import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { User } from '../../../core/models/auth';
import { personalDetailForm } from '../../../core/data/form-labels';

@Component({
  selector: 'job-hub-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  prefix = personalDetailForm.prefix;
  form: FormGroup = this.fb.group({
    user: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    })
  });

  constructor(
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService
  ) { }

  ngOnInit(): void {
    const user = this.customerSignupWizardService.getFromStorage('user');
    this.updateUserForm(user);
  }

  private updateUserForm(user?: User) {
    const data: User = user || {} as any;
    this.form.get('user').get('firstName').setValue(data.firstName || '');
    this.form.get('user').get('lastName').setValue(data.lastName || '');
    this.form.get('user').get('email').setValue(data.email || '');
    this.form.get('user').get('phone').setValue(data.phone || '');
  }

}
