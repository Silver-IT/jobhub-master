import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../models/auth';
import { AuthService } from '../services/auth.service';
import { SocketService } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(
    private authService: AuthService,
    private socketService: SocketService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.authService.getAuth().pipe(
      tap(res => {
        this.socketService.join(res.id);
      })
    );
  }
}
