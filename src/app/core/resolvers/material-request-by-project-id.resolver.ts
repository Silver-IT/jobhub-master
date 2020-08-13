import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MaterialRequestItem } from '../models/material';
import { MaterialService } from '../services/material.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialRequestByProjectIdResolver implements Resolve<MaterialRequestItem[]> {

  constructor(
    private materialService: MaterialService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MaterialRequestItem[]> | Promise<MaterialRequestItem[]> | MaterialRequestItem[] {
    const id = route.parent.params.id || route.parent.parent.params.id;
    return this.materialService.getMaterialRequests(id).pipe(
      catchError(err => {
        this.toastr.error(err, 'Sorry, failed to load material request. Possibly invalid project id. Please try different one.');
        return throwError(err);
      })
    );
  }
}
