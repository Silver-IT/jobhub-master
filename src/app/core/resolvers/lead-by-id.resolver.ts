import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Lead } from '../models/lead';
import { LeadService } from '../services/lead.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class LeadByIdResolver implements Resolve<Lead> {

  constructor(
    private leadService: LeadService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lead> | Promise<Lead> | Lead {
    return this.leadService.getLeadById(route.params.id).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to fetch lead details. Possibly lead id is invalid. Please try different one.');
        return throwError(e);
      })
    );
  }
}
