import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { confirmPasswordValidator } from '../../../../core/utils/validators.util';
import { AuthService } from '../../../../core/services/auth.service';
import { ToastrService } from '../../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  @Output() updateProfile: EventEmitter<any> = new EventEmitter<any>();

  isLoading = false;

  form: FormGroup = this.fb.group({
    old: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async changePassword() {
    try {
      this.isLoading = true;
      await this.authService.changePassword(this.form.value.old, this.form.value.password).toPromise();
      this.form.reset();
      this.updateProfile.emit();
      this.toastr.success('Your password has successfully been updated.');
    } catch (e) {
      this.toastr.error(e, 'Sorry, Failed to update password. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
