import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EmailEvent } from '../models/email';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailEventsByIdResolver implements Resolve<any> {

  constructor(
    private emailService: EmailService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmailEvent[]> | Promise<EmailEvent[]> | EmailEvent[] {
    const id = route.params.id;
    return this.emailService.getEmailEventsById(id);
  }
}
