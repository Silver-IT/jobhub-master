import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Customer } from '../models/auth';
import { CustomerService } from '../services/customer.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolver implements Resolve<Customer[]> {

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer[]> | Promise<Customer[]> | Customer[] {
    return this.customerService.getCustomers(0, 9999).pipe( // TODO: update api
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load customers information.');
        return throwError(e);
      })
    ).pipe(map(({_, data}: any) => data));
  }
}
