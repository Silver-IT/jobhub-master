import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

import { Location } from '../../../core/models/base';

@Component({
  selector: 'job-hub-address-auto-complete-input',
  templateUrl: './address-auto-complete-input.component.html',
  styleUrls: ['./address-auto-complete-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressAutoCompleteInputComponent),
      multi: true,
    }
  ]
})
export class AddressAutoCompleteInputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() placeholder;
  @Input() value;
  @Input() readonly;
  @Output() latLngChanged: EventEmitter<Location> = new EventEmitter<Location>();

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

  handleAddressChange(address: Address) {
    if (this.onChange) {
      this.onChange(address.formatted_address);
      const latlng = address.geometry.location.toJSON();
      this.latLngChanged.emit({latitude: latlng.lat, longitude: latlng.lng});
    }
  }

  handleHardAddressChange(address: string) {
    this.onChange(address);
    this.latLngChanged.emit({latitude: null, longitude: null});
  }

}
