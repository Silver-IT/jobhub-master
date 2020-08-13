import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from '../../core/services/toastr.service';
import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-verify-email-change',
  templateUrl: './verify-email-change.component.html',
  styleUrls: ['./verify-email-change.component.scss']
})
export class VerifyEmailChangeComponent implements OnInit {

  token = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    this.verify();
  }

  async verify() {
    try {
      await this.authService.verifyEmailChange(this.token).toPromise();
      this.toastr.success('Your account is successfully verified!');
    } catch (e) {
      this.toastr.error(e, 'Failed to verify your account. Please contact customer support.');
    } finally {
      this.router.navigate([ROUTES.app.root, ROUTES.app.myProjects]);
    }
  }

}
