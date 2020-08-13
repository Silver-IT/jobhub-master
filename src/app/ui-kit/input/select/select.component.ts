import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '../../../core/models/option';

@Component({
  selector: 'job-hub-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() placeholder = 'Select option';
  @Input() options: Option<any>[] = [];
  @Input() readonly;

  value: any;
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
