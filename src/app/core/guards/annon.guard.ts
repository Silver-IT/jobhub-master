import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { LogRocketService } from '../services/log-rocket.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private logRocketService: LogRocketService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(async (resolve) => {
      if (this.authService.isLoggedIn) {
        try {
          const token = await this.authService.decodeToken();
          this.logRocketService.login(token);
          this.authService.navigateByUserRole(token.role);
          resolve(false);
        } catch (e) {
          resolve(true);
        }
      } else {
        resolve(true);
      }
    });
  }
}
