import { Component, Input, OnInit } from '@angular/core';

import { InvitationStatus, User } from '../../../core/models/auth';
import { UserService } from '../../../core/services/user.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-invitation-button',
  templateUrl: './invitation-button.component.html',
  styleUrls: ['./invitation-button.component.scss']
})
export class InvitationButtonComponent implements OnInit {

  @Input() user: User;

  isSaving = false;

  InvitationStatus = InvitationStatus;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  async sendInvitation($event) {
    $event.preventDefault();
    try {
      this.isSaving = true;
      await this.userService.sendInvitation(this.user.id).toPromise();
      this.user.invitationStatus = InvitationStatus.Sent;
    } catch (e) {
      this.toastr.error(e, 'Unable to send invitation email.');
    } finally {
      this.isSaving = false;
    }
  }
}
