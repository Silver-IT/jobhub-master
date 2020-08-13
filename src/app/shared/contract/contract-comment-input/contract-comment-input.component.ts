import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'job-hub-contract-comment-input',
  templateUrl: './contract-comment-input.component.html',
  styleUrls: ['./contract-comment-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContractCommentInputComponent),
      multi: true,
    }
  ]
})
export class ContractCommentInputComponent implements ControlValueAccessor {

  @Input() label;
  @Input() description;
  @Input() readonly: boolean;
  @Input() optional: boolean;
  @Input() isEditing = true;

  value;
  onChange;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(value) {
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }

  notNecessary() {
    this.value = 'N/A';
    this.onChange(this.value);
    this.isEditing = false;
  }

}
