import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Job } from '../models/hiring';
import { HiringService } from '../services/hiring.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class JobByIdResolver implements Resolve<Job> {

  constructor(
    private hiringService: HiringService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job> | Promise<Job> | Job {
    return this.hiringService.getJobById(route.params.id).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load job detail. Possibly job id is invalid or closed. Please try different one.');
        return throwError(e);
      })
    );
  }
}
