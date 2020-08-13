import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';
import { PipesModule } from '../pipes/pipes.module';
import { IconModule } from '../icon/icon.module';

import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ImageCardSelectorComponent } from './image-card-selector/image-card-selector.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { YesNoPickerComponent } from './yes-no-picker/yes-no-picker.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { AddressAutoCompleteInputComponent } from './address-auto-complete-input/address-auto-complete-input.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    PhoneNumberInputComponent,
    TextInputComponent,
    SelectComponent,
    TextareaComponent,
    ImageCardSelectorComponent,
    DatePickerComponent,
    TimePickerComponent,
    DateTimePickerComponent,
    YesNoPickerComponent,
    MultiSelectComponent,
    TimeRangePickerComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    SearchInputComponent,
    AddressAutoCompleteInputComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbDropdownModule,
    GooglePlaceModule,
    NgxMaskModule.forRoot(),
    TextareaAutosizeModule,
    CommonUiKitModule,
    IconModule,
    PipesModule
  ],
  exports: [
    MatNativeDateModule,
    PhoneNumberInputComponent,
    TextInputComponent,
    SelectComponent,
    TextareaComponent,
    ImageCardSelectorComponent,
    DatePickerComponent,
    TimePickerComponent,
    DateTimePickerComponent,
    YesNoPickerComponent,
    MultiSelectComponent,
    TimeRangePickerComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    SearchInputComponent,
    AddressAutoCompleteInputComponent,
    AutoCompleteComponent
  ]
})
export class InputModule {
}
