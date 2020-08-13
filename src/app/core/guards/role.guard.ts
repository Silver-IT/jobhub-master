import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(async (resolve, reject) => {
      try {
        const decoded = await this.authService.decodeToken();
        const role = decoded.role;
        if (role === UserRole.SuperAdmin) {
          resolve(true);
        }
        if (next.data.roles) {
          const isAllowed = Boolean(next.data.roles.findIndex(x => x === role) >= 0);
          if (isAllowed) {
            resolve(true);
          } else {
            this.authService.navigateByUserRole(role);
            resolve(false);
          }
        } else {
          resolve(true);
        }
      } catch (e) {
        this.authService.logout();
      }
    });
  }
}
