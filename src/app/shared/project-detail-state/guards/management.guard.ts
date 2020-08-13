import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { FinalProposalStatus } from '../../../core/models/final-proposal';
import { ProjectDetailStateService } from '../project-detail-state.service';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class ManagementGuard implements CanActivate {

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private authService: AuthService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.projectDetailStateService.project) {
      this.authService.navigateByUserRole();
      return false;
    }
    if (Boolean(this.projectDetailStateService.finalProposal) && this.projectDetailStateService.finalProposal.status === FinalProposalStatus.Accepted) {
      return true;
    } else {
      this.authService.navigateByUserRole();
      return false;
    }
  }

}
