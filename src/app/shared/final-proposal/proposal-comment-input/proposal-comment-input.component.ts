import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'job-hub-proposal-comment-input',
  templateUrl: './proposal-comment-input.component.html',
  styleUrls: ['./proposal-comment-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProposalCommentInputComponent),
      multi: true,
    }
  ]
})
export class ProposalCommentInputComponent implements ControlValueAccessor {

  @Input() label;
  @Input() description;
  @Input() innerLabel = '';
  @Input() height = 100;
  @Input() light = false;
  @Input() readonly: boolean;
  @Input() optional: boolean;
  @Input() isEditing = true;
  // tslint:disable-next-line:no-input-rename
  @Input('class') additionalClass = '';
  @Input() useExternalEditor = false;

  @Output() remove = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  value;
  onChange;

  constructor() {
  }

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
    this.remove.emit(null);
  }

  toggleEdit() {
    if (this.useExternalEditor) {
      this.edit.emit(null);
    } else {
      this.isEditing = !this.isEditing;
    }
  }

}

