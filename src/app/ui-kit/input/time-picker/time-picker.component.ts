import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { generateTimeSlots } from '../../../core/utils/time.util';

@Component({
  selector: 'job-hub-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true,
    }
  ]
})
export class TimePickerComponent implements ControlValueAccessor, OnInit {

  @Input() label;
  @Input() isRange = true;
  @Input() min = '-1';
  @Input() max = '24:00';
  @Input() container = 'body';

  options = generateTimeSlots(this.isRange);
  value;
  onChange;

  ngOnInit(): void {
    this.options = generateTimeSlots(this.isRange);
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

  change(value, dropdown) {
    this.value = value;
    dropdown.close();
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }

}
