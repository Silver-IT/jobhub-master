import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { SchedulerService } from './scheduler.service';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimeSlotPickerComponent } from './time-slot-picker/time-slot-picker.component';
import { InputModule } from '../input/input.module';
import { TimeBlockButtonComponent } from './time-block-button/time-block-button.component';
import { TimeRangePickerComponent } from './time-range-picker/time-range-picker.component';

@NgModule({
  declarations: [
    DatePickerComponent,
    TimeSlotPickerComponent,
    TimeBlockButtonComponent,
    TimeRangePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbDatepickerModule,
    CommonUiKitModule,
    InputModule
  ],
  providers: [
    SchedulerService
  ]
})
export class SchedulerModule {
  static forRoot(): ModuleWithProviders<SchedulerModule> {
    return {
      ngModule: SchedulerModule,
      providers: [ SchedulerService ]
    };
  }
}
