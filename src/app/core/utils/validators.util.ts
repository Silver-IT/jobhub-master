import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('confirmPassword');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return {passwordsNotMatching: true};
};

export const timeRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const from = control.parent.get('from');
  const to = control.parent.get('to');

  if (!from || !to) {
    return null;
  }

  if (from.value === '') {
    return null;
  }

  if (from.value < to.value) {
    return null;
  }

  return {invalidTimeRange: true};
};
