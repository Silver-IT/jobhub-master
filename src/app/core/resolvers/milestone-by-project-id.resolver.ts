import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Milestone } from '../models/milestone';
import { ProjectService } from '../services/project.service';
import { ToastrService } from '../services/toastr.service';
import { ROUTES } from '../data/routes';

@Injectable({
  providedIn: 'root'
})
export class MilestoneByProjectIdResolver implements Resolve<Milestone[]> {

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Milestone[]> | Promise<Milestone[]> | Milestone[] {
    const projectId = route.params.id || route.parent.params.id;
    return this.projectService.getMilestonesByProjectId(projectId).pipe(
      catchError(err => {
        this.toastr.error(err, 'Sorry, failed to load project detail. Possibly invalid project id. Please try different one.');
        this.router.navigate([ROUTES.auth.login]);
        return throwError(err);
      })
    );
  }
}
