import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { isValidDate, timeFromTimeSlot, timeSlotFromDate } from '../../../core/utils/time.util';

@Component({
  selector: 'job-hub-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true,
    }
  ]
})
export class DateTimePickerComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() container = 'body';

  value;
  onChange;
  form: FormGroup = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(value => {
      if (this.form.valid) {
        this.change(timeFromTimeSlot(new Date(value.date), value.time));
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(datetime: any): void {
    if (isValidDate(datetime)) {
      this.form.get('date').setValue(new Date(datetime).toISOString());
      this.form.get('time').setValue(timeSlotFromDate(new Date(datetime)));
      const value = this.form.value;
      this.change(timeFromTimeSlot(new Date(value.date), value.time));
    } else {
      this.form.get('date').setValue('');
      this.form.get('time').setValue('');
    }
  }

  change(value) {
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }

}
