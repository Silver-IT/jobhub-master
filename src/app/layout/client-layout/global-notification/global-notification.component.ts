import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-global-notification',
  templateUrl: './global-notification.component.html',
  styleUrls: ['./global-notification.component.scss']
})
export class GlobalNotificationComponent implements OnInit {

  isLoading = false;
  show = true;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async resend() {
    try {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      await this.authService.resendVerificationEmail().toPromise();
      this.toastr.info(`We've sent the verification email. Please check your inbox.`);
    } catch (e) {
      this.toastr.error(e, `Sorry, We can't send the verification email. Please contact customer support`);
    } finally {
      this.isLoading = false;
    }
  }

}
