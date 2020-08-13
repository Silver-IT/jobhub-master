import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EmailLog } from '../models/email';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailsByProjectIdResolver implements Resolve<any> {

  constructor(
    private emailService: EmailService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmailLog[]> | Promise<EmailLog[]> | EmailLog[] {
    const id = route.parent.params.id;
    return this.emailService.getEmailsByProjectId(id);
  }
}
