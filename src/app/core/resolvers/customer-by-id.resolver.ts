import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from '../models/auth';
import { CustomerService } from '../services/customer.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerByIdResolver implements Resolve<Customer> {

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> | Promise<Customer> | Customer {
    return this.customerService.getCustomerById(route.params.id).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load customer information. Possibly customer id is invalid. Please try different one');
        return throwError(e);
      })
    );
  }
}
