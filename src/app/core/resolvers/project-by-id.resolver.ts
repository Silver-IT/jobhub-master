import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ProjectDetail } from '../models/project';
import { ProjectService } from '../services/project.service';
import { ToastrService } from '../services/toastr.service';
import { ROUTES } from '../data/routes';

@Injectable({
  providedIn: 'root'
})
export class ProjectByIdResolver implements Resolve<ProjectDetail> {

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectDetail> | Promise<ProjectDetail> | ProjectDetail {
    return this.projectService.getProjectById(route.params.id).pipe(
      catchError(err => {
        this.toastr.error(err, 'Invalid project id, please try again with different project');
        this.router.navigate([ROUTES.auth.login]);
        return throwError(err);
      })
    );
  }
}
