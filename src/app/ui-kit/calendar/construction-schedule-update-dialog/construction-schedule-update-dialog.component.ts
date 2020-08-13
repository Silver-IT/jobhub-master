import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent } from 'calendar-utils';

import { Schedule } from '../../../core/models/schedule';
import { ToastrService } from '../../../core/services/toastr.service';
import { ScheduleService } from '../../../core/services/schedule.service';

@Component({
  selector: 'job-hub-construction-schedule-update-dialog',
  templateUrl: './construction-schedule-update-dialog.component.html',
  styleUrls: ['./construction-schedule-update-dialog.component.scss']
})
export class ConstructionScheduleUpdateDialogComponent implements OnInit {

  isLoading = false;
  schedule: Schedule;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { event: CalendarEvent<Schedule> },
    private fb: FormBuilder,
    private toastr: ToastrService,
    private scheduleService: ScheduleService,
    private dialogRef: MatDialogRef<ConstructionScheduleUpdateDialogComponent>
  ) { }

  ngOnInit(): void {
    this.schedule = this.data.event.meta;
    this.form = this.fb.group({
      from: [this.schedule.from, Validators.required],
      to: [this.schedule.to, Validators.required],
    });
  }

  async save() {
    try {
      this.isLoading = true;
      // TODO: call proper api to update construction schedule
      const res = await this.scheduleService.updateScheduleById(this.schedule.id, {...this.schedule, from: this.form.value.from, to: this.form.value.to}).toPromise();
      this.dialogRef.close(res);
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to update project construction schedule. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
