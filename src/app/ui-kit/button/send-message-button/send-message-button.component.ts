import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from '../../../core/services/chat.service';
import { User, UserRole } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-send-message-button',
  templateUrl: './send-message-button.component.html',
  styleUrls: ['./send-message-button.component.scss']
})
export class SendMessageButtonComponent implements OnInit {

  @Input() projectId: string;
  @Input() user: User;
  @Input() text = 'Send Message';

  isLoading = false;
  ROUTES = ROUTES;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async sendMessage() {
    try {
      this.isLoading = true;
      const res = await this.chatService.initChat(this.projectId).toPromise();
      if (this.user.role === UserRole.Customer) {
        this.router.navigate([ROUTES.admin.root, ROUTES.common.inbox, res.id]);
      } else {
        this.router.navigate([ROUTES.app.root, ROUTES.common.inbox, res.id]);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to open conversation with agency. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

}
