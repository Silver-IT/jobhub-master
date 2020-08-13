import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProjectDetailStateService } from '../project-detail-state.service';
import { AuthService } from '../../../core/services/auth.service';
import { ProjectService } from '../../../core/services/project.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Injectable()
export class ProposalGuard implements CanActivate {

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.projectDetailStateService.project) {
      this.authService.navigateByUserRole();
      return false;
    }
    if (Boolean(this.projectDetailStateService.finalProposal)) {
      if (!this.projectDetailStateService.finalProposal.layouts) {
        return this.projectService.getFinalProposalByProjectId(this.projectDetailStateService.project.id).pipe(
          map(finalProposal => {
            this.projectDetailStateService.setFinalProposal(finalProposal);
            return true;
          }),
          catchError(err => {
            this.toastr.error(err, 'Sorry, We are not able to get final proposal detail. Please try again or contact our customer support.');
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
