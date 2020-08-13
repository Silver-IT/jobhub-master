import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'job-hub-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: false,
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() value: boolean;
  @Input() readonly;

  @Output() valueChange = new EventEmitter<boolean>();

  onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
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

  registerOnTouched(fn: any): void {
  }
}
