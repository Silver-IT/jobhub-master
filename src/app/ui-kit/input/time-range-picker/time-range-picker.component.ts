import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { timeFromTimeSlot } from '../../../core/utils/time.util';

@Component({
  selector: 'job-hub-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeRangePickerComponent),
      multi: true,
    }
  ]
})
export class TimeRangePickerComponent implements ControlValueAccessor, OnInit {

  @Input() date: string;

  value;
  onChange;

  form: FormGroup = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      if (value.from >= value.to) {
        this.form.get('to').reset();
        this.onChange(null);
      }
      if (this.form.valid) {
        this.onChange({
          from: timeFromTimeSlot(new Date(this.date), value.from),
          to: timeFromTimeSlot(new Date(this.date), value.to),
        });
      }
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(datetime: any): void {

  }

  change(value) {
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }

}
