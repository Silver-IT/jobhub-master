import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'job-hub-toggle-button-group',
  templateUrl: './toggle-button-group.component.html',
  styleUrls: ['./toggle-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonGroupComponent),
      multi: true,
    }
  ]
})
export class ToggleButtonGroupComponent implements ControlValueAccessor {

  @Input() options: any[];
  @Input() selectedOption: any;
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();

  onChange;
  onTouched;

  writeValue(value: any): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState() {
    // TODO: add implementation
  }

  select(option: any) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
    if (this.onChange) {
      this.onChange(option);
    }
  }
}
