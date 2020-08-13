import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Base64 } from 'js-base64';

import { AuthService } from '../../core/services/auth.service';
import { LogRocketService } from '../../core/services/log-rocket.service';

@Component({
  selector: 'job-hub-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private logRocketService: LogRocketService
  ) {
  }

  ngOnInit(): void {
    const payload = this.route.snapshot.params.payload;
    const { accessToken, route } = JSON.parse(Base64.decode(payload));
    this.authService.authenticateUser(accessToken);
    this.authService.decodeToken().then(token => this.logRocketService.login(token));
    this.router.navigate([route]);
  }

}
