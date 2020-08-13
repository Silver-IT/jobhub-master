import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MaterialOrderGroup } from '../models/material';
import { MaterialService } from '../services/material.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialOrderByProjectIdResolver implements Resolve<MaterialOrderGroup[]> {

  constructor(
    private materialService: MaterialService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MaterialOrderGroup[]> | Promise<MaterialOrderGroup[]> | MaterialOrderGroup[] {
    const id = route.parent.params.id || route.parent.parent.params.id;
    return this.materialService.getMaterialOrders(id).pipe(
      catchError(err => {
        this.toastr.error(err, 'Sorry, failed to load material order. Possibly invalid project id. Please try different one.');
        return throwError(err);
      })
    );
  }
}
