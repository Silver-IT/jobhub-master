import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { User, UserRole } from '../../../../core/models/auth';
import { ToastrService } from '../../../../core/services/toastr.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'job-hub-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent implements OnInit {

  form: FormGroup;
  roleOptions = [
    {value: UserRole.SuperAdmin, label: 'Super Admin'},
    {value: UserRole.Contractor, label: 'Contractor'},
  ];
  isSaving = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.buildUserForm();
    if (this.data) {
      this.form.controls.firstName.clearValidators();
      this.form.controls.lastName.clearValidators();
      this.form.controls.email.clearValidators();
      this.form.controls.phone.clearValidators();
    }
  }

  async save() {
    try {
      this.isSaving = true;
      let user;
      if (this.data && this.data.id) {
        user = await this.userService.changeRole(this.data.id, this.form.value.role).toPromise();
      } else {
        user = await this.userService.invite(this.form.value).toPromise();
      }
      this.dialogRef.close(user);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to submit your request. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }

  private buildUserForm() {
    const data: User = this.data || {} as any;
    this.form = this.fb.group({
      firstName: [data.firstName || '', Validators.required],
      lastName: [data.lastName || '', Validators.required],
      email: [data.email || '', [Validators.required, Validators.email]],
      role: [data.role || '', Validators.required],
      phone: [data.phone || '', Validators.required],
    });
  }

}
