import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from '../services/toastr.service';
import { ROUTES } from '../data/routes';
import { NetworkContractor } from '../models/network-contractor';
import { NetworkContractorService } from '../services/network-contractor.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkContractorByIdResolver implements Resolve<NetworkContractor> {

  constructor(
    private networkContractorService: NetworkContractorService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NetworkContractor> | Promise<NetworkContractor> | NetworkContractor {
    return this.networkContractorService.getContractorById(route.params.id).pipe(
      catchError(err => {
        this.toastr.error(err, 'Invalid network contractor id, please try again with different contractor');
        this.router.navigate([ROUTES.admin.network]);
        return throwError(err);
      })
    );
  }
}
