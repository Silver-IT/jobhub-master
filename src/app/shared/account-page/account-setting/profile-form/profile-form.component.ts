import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/auth';
import { ToastrService } from '../../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Output() changePassword: EventEmitter<any> = new EventEmitter<any>();

  isLoading = false;
  user: User;
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.authService.user$.pipe(
      filter(user => Boolean(user))
    ).subscribe(user => {
      this.user = user;
      this.form.get('firstName').setValue(this.user.firstName);
      this.form.get('lastName').setValue(this.user.lastName);
      this.form.get('phone').setValue(this.user.phone);
    });
  }

  async updateProfile() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      await this.authService.updateProfile(payload).toPromise();
      this.toastr.success('Your profile has successfully been updated.');
    } catch (e) {
      this.toastr.error(e, 'Failed to update your profile. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
