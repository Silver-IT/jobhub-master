import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NavigationEnd, Router } from '@angular/router';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as LogRocket from 'logrocket';

import { LogRocketService } from './core/services/log-rocket.service';
import { environment } from '../environments/environment';


declare var gtag;


@Component({
  selector: 'job-hub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hasUpdate = false;

  constructor(
    private router: Router,
    private swUpdate: SwUpdate,
    private logRocketService: LogRocketService
  ) {
    const navEndEvent$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', environment.googleConversionTrackingCode, { page_path: e.urlAfterRedirects });
    });
  }

  ngOnInit(): void {
    // check for platform update
    if (this.swUpdate.isEnabled) {
      interval(60000).subscribe(() => this.swUpdate.checkForUpdate().then(() => {
        // checking for updates
      }));
    }
    this.swUpdate.available.subscribe(() => {
      this.hasUpdate = true;
    });

    this.getLogRocketSession();
  }

  reloadSite() {
    location.reload();
  }

  private getLogRocketSession() {
    // wait for 2 seconds to get session url
    setTimeout(async () => {
      // tslint:disable
      const recordingId = LogRocket['recordingID'];
      const initialized = LogRocket['_isInitialized'];
      if (recordingId && initialized) {
        // save log rocket session
        this.logRocketService.saveSession(recordingId);
      }
    }, 2000);
  }
}
