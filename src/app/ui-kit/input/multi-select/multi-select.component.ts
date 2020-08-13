import { ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MultiOption } from '../../../core/models/option';

@Component({
  selector: 'job-hub-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  @Input() options: MultiOption<any>[] = [];
  @Input() placeholder = 'Select options';
  @Input() readonly;
  @Input() container: string = null;

  clonedOptions: MultiOption<any>[] = [];
  value;
  onChange;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.clonedOptions = JSON.parse(JSON.stringify(this.options));
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any[]): void {
    this.value = obj;
    if (this.value) {
      this.clonedOptions.forEach(option => {
        const flag = this.value.findIndex(x => option.value ===  x);
        option.selected = flag >= 0;
        this.cdr.detectChanges();
      });
    }
  }

  toggleOption(e, option: MultiOption<any>) {
    e.stopPropagation();
    e.preventDefault();
    if (!this.readonly) {
      option.selected = !option.selected;
      const value = this.clonedOptions.filter(x => x.selected).map(x => x.value);
      this.value = value;
      this.onChange(value);
    }
  }

  removeItem(e, index: number) {
    e.preventDefault();
    e.stopPropagation();
    const found = this.clonedOptions.findIndex(x => x.value === this.value[index]);
    if (found >= 0) {
      this.clonedOptions[found].selected = false;
      this.value.splice(index, 1);
      this.onChange(this.value);
    }
  }

  openDropdown(dropdown) {
    if (!this.readonly) {
      dropdown.open();
    }
  }

}
