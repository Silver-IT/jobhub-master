import { Component, OnInit } from '@angular/core';

enum FormType {
  ProfileForm = 'PROFILE_FORM',
  PasswordForm = 'PASSWORD_FORM'
}

@Component({
  selector: 'job-hub-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {

  FormType = FormType;
  form: FormType = FormType.ProfileForm;

  constructor(
  ) { }

  ngOnInit(): void {

  }
}
