import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../../../core/models/auth';

enum FormType {
  ProfileForm = 'PROFILE_FORM',
  ChangeEmailForm = 'CHANGE_EMAIL_FORM'
}

@Component({
  selector: 'job-hub-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit {

  user: Customer = this.route.parent.snapshot.data.user;
  form = FormType.ProfileForm;

  FormType = FormType;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

}
