import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProjectService } from '../services/project.service';
import { Estimate } from '../models/estimate';
import { ToastrService } from '../services/toastr.service';
import { ProjectDetailStateService } from '../../shared/project-detail-state/project-detail-state.service';

@Injectable({
  providedIn: 'root'
})
export class EstimateByProjectIdResolver implements Resolve<any> {

  constructor(
    private projectService: ProjectService,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Estimate> | Promise<Estimate> | Estimate {
    // mostly, estimate depends parent routing
    const id = route.parent.params.id || route.parent.parent.params.id;
    if (this.projectDetailStateService.estimate.items) {
      return this.projectDetailStateService.estimate;
    }
    return this.projectService.getEstimateByProjectId(id).pipe(
      map(estimate => {
        this.projectDetailStateService.setEstimate(estimate);
        return estimate;
      }),
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load estimate information. Possibly estimate id is invalid. Please try different one.');
        return throwError(e);
      })
    );
  }
}
