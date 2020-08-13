import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User, UserRole } from '../models/auth';
import { ContractorService } from '../services/contractor.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ContractorsResolver {

  constructor(
    private contractorService: ContractorService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    if (this.authService.user.role === UserRole.SuperAdmin) {
      return this.contractorService.getContractors().pipe(
        catchError(e => {
          this.toastr.error(e, 'Sorry, failed to load contractors. Please try again.');
          return throwError(e);
        })
      );
    } else {
      return [];
    }
  }
}
