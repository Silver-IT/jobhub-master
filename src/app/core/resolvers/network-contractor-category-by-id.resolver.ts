import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from '../services/toastr.service';
import { ROUTES } from '../data/routes';
import { NetworkContractorCategory } from '../models/network-contractor';
import { NetworkContractorService } from '../services/network-contractor.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkContractorCategoryByIdResolver implements Resolve<NetworkContractorCategory> {

  constructor(
    private networkContractorService: NetworkContractorService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NetworkContractorCategory> | Promise<NetworkContractorCategory> | NetworkContractorCategory {
    return this.networkContractorService.getCategoryById(route.params.id).pipe(
      catchError(err => {
        this.toastr.error(err, 'Invalid network contractor category id, please try again with different contractor');
        this.router.navigate([ROUTES.admin.network]);
        return throwError(err);
      })
    );
  }
}
