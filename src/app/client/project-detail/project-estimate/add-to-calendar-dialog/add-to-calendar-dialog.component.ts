import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SiteVisitSchedule } from '../../../../core/models/estimate';
import { OauthService } from '../../../../shared/oauth/oauth.service';
import { ScheduleService } from '../../../../core/services/schedule.service';
import { AddCalendarEventPayload, Calendar } from '../../../../core/models/schedule';
import { ToastrService } from '../../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-add-to-calendar-dialog',
  templateUrl: './add-to-calendar-dialog.component.html',
  styleUrls: ['./add-to-calendar-dialog.component.scss']
})
export class AddToCalendarDialogComponent implements OnInit {

  isLoading = false;
  token: string;
  calendars: Calendar[] = [];
  stepSelectCalendar = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SiteVisitSchedule,
    private dialogRef: MatDialogRef<AddToCalendarDialogComponent>,
    private oauthService: OauthService,
    private scheduleService: ScheduleService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    try {
      this.isLoading = true;
      const userInfo = await this.oauthService.signInWithGoogle();
      if (userInfo) {
        this.token = userInfo.authToken;
        this.calendars = await this.scheduleService.getGoogleCalendars(this.token).toPromise();
        if (this.calendars && this.calendars.length === 1) {
          this.addEventToCalendar(this.calendars[0]);
        } else {
          this.stepSelectCalendar = true;
        }
      } else {
        this.toastr.info('Please click add to calendar again once you select your google account.');
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async addEventToCalendar(calendar: Calendar) {
    try {
      this.isLoading = true;
      const payload: AddCalendarEventPayload = {
        start: this.data.from,
        end: this.data.to,
        summary: 'Site Visit Schedule from J&D Landscaping',
        description: 'J&D Landscaping'
      };
      await this.scheduleService.addGoogleCalendarEvent(this.token, calendar.id, payload).toPromise();
      this.toastr.success('Schedule has been added to your calendar.');
      this.dialogRef.close();
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to add schedule to your google calendar. Please try again or add it manually.');
    } finally {
      this.isLoading = false;
    }
  }

}
