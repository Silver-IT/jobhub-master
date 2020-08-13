import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProjectDetailStateService } from '../project-detail-state.service';
import { AuthService } from '../../../core/services/auth.service';
import { ProjectService } from '../../../core/services/project.service';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from '../../../core/services/toastr.service';

@Injectable()
export class EstimateGuard implements CanActivate {

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.projectDetailStateService.project) {
      this.authService.navigateByUserRole();
      return false;
    }
    if (Boolean(this.projectDetailStateService.estimate)) {
      if (!this.projectDetailStateService.estimate.items) {
        return this.projectService.getEstimateByProjectId(this.projectDetailStateService.project.id).pipe(
          map(estimate => {
            this.projectDetailStateService.setEstimate(estimate);
            return true;
          }),
          catchError(err => {
            this.toastr.error(err, 'Sorry, We are not able to get estimate detail. Please try again or contact our customer support.');
            this.authService.navigateByUserRole(this.authService.user.role);
            return of(false);
          })
        );
      }
      return true;
    } else {
      this.authService.navigateByUserRole();
      return false;
    }
  }

}
