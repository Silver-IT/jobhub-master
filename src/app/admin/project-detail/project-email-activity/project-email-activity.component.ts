import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailService } from '../../../core/services/email.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { EmailEventType } from '../../../core/models/email';

@Component({
  selector: 'job-hub-project-emails',
  templateUrl: './project-email-activity.component.html',
  styleUrls: ['./project-email-activity.component.scss']
})
export class ProjectEmailActivityComponent implements OnInit {

  emails = [];
  events = null;

  isLoading = false;

  EmailEventType = EmailEventType;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.emails = this.route.snapshot.data.emails.map(email => ({ ...email, selected: false }));
  }

  selectEmail(id: string) {
    this.emails.forEach(email => email.selected = email.id === id);
    this.loadEvents(id);
  }

  async loadEvents(id: string) {
    try {
      this.isLoading = true;
      this.events = await this.emailService.getEmailEventsById(id).toPromise();
    } catch (e) {
      this.toastr.error(e, 'Unable to fetch email events from Send Grid service. Please try again later.');
    } finally {
      this.isLoading = false;
    }
  }

}
