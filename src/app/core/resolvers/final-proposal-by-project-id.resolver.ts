import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProjectService } from '../services/project.service';
import { FinalProposal } from '../models/final-proposal';
import { ToastrService } from '../services/toastr.service';

@Injectable()
export class FinalProposalByProjectIdResolver implements Resolve<any> {

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FinalProposal> | Promise<FinalProposal> | FinalProposal {
    // mostly, estimate depends parent routing
    const id = route.parent.params.id || route.parent.parent.params.id;
    return this.projectService.getFinalProposalByProjectId(id).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load final proposal information. Possibly proposal id is invalid. Please try different one.');
        return throwError(e);
      })
    );
  }
}
