import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProjectDetailStateService } from '../project-detail-state.service';
import { AuthService } from '../../../core/services/auth.service';
import { FinalProposalStatus } from '../../../core/models/final-proposal';
import { ProjectService } from '../../../core/services/project.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Injectable()
export class ContractGuard implements CanActivate {

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
    if (!this.projectDetailStateService.finalProposal) {
      this.authService.navigateByUserRole();
      return false;
    }
    if (this.projectDetailStateService.finalProposal.status === FinalProposalStatus.Accepted) {
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
