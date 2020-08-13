import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Option } from '../../../core/models/option';

@Component({
  selector: 'job-hub-yes-no-picker',
  templateUrl: './yes-no-picker.component.html',
  styleUrls: ['./yes-no-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesNoPickerComponent),
      multi: true,
    }
  ]
})
export class YesNoPickerComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() placeholder = 'Select option';
  @Input() readonly;

  options: Option<boolean>[] = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];
  value = '';
  onChange;

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
    value = value === 'true';
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }

  clicked(e) {
    if (this.readonly) {
      e.preventDefault();
    }
  }

}
