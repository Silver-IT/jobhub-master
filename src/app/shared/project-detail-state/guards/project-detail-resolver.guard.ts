import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProjectDetailStateService } from '../project-detail-state.service';
import { ProjectService } from '../../../core/services/project.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Injectable()
export class ProjectDetailResolverGuard implements CanActivate {

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private projectService: ProjectService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.projectService.getProjectById(next.params.id).pipe(
      map(project => {
        this.projectDetailStateService.setProject(project);
        this.projectDetailStateService.setEstimate(project.estimate);
        this.projectDetailStateService.setFinalProposal(project.finalProposal);
        return true;
      }),
      catchError(err => {
        this.toastr.error(err, 'Sorry, We are not able to get project detail. Please try again or contact our customer support.');
        this.authService.navigateByUserRole(this.authService.user.role);
        return of(false);
      })
    );
  }
}
