import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { User } from '../../../../core/models/auth';
import { AlertService } from '../../../../ui-kit/alert/alert.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'job-hub-change-email-form',
  templateUrl: './change-email-form.component.html',
  styleUrls: ['./change-email-form.component.scss']
})
export class ChangeEmailFormComponent implements OnInit {

  @Input() user: User;

  @Output() profileView = new EventEmitter<any>();

  form;

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  updateEmail() {
    this.alert.yesNo('Confirmation', 'Are you sure want to change the email address of this customer?')
      .pipe(filter(s => s))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          await this.authService.sendEmailChangeEmail(this.user.id, this.form.value.email).toPromise();
          this.toastr.success('The email change request was sent to customer.');
        } catch (e) {
          this.toastr.error(e, 'Unable to send email change request.');
        } finally {
          this.isLoading = false;
        }
      });
  }

}
