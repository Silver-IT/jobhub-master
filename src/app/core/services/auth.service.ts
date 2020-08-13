import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '../../../environments/environment';
import { AcceptInvitePayload, CreditCard, DecodedToken, LoginResponse, Profile, User, UserRole } from '../models/auth';
import { ROUTES } from '../data/routes';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);

  user: User;
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  get accessToken(): string {
    return this.localStorage.get(environment.localStorage.accessToken);
  }

  set accessToken(value: string) {
    this.localStorage.set(environment.localStorage.accessToken, value);
  }

  get isLoggedIn(): boolean {
    return Boolean(this.accessToken);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const url = `${environment.api}/auth/login`;
    return this.http.post<LoginResponse>(url, { email, password }).pipe(
      tap(res => {
        this.authenticateUser(res.accessToken);
      })
    );
  }

  logout() {
    this.accessToken = null;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.user = null;
    this.user$.next(this.user);
    this.router.navigate([ROUTES.auth.login]);
  }

  forgotPassword(email: string): Observable<any> {
    const url = `${environment.api}/auth/forgot-password`;
    return this.http.post(url, { email });
  }

  resetPassword(password: string, resetToken: string): Observable<any> {
    const url = `${environment.api}/auth/reset-password`;
    return this.http.post(url, { password, resetToken });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const url = `${environment.api}/auth/change-password`;
    return this.http.post(url, { oldPassword, newPassword });
  }

  verifyEmail(verifyToken: string): Observable<any> {
    const url = `${environment.api}/auth/verify`;
    return this.http.post(url, { verifyToken }).pipe(
      tap(() => {
        if (this.user) {
          this.user.isEmailVerified = true;
          this.user$.next(this.user);
        }
      })
    );
  }

  sendEmailChangeEmail(userId: string, targetEmail: string): Observable<SuccessResponse> {
    const url = `${environment.api}/user/${userId}/change-email`;
    return this.http.put<SuccessResponse>(url, { to: targetEmail });
  }

  verifyEmailChange(verifyToken: string): Observable<LoginResponse> {
    const url = `${environment.api}/auth/verify-email-change`;
    return this.http.post<LoginResponse>(url, { verifyToken }).pipe(tap(res => {
      this.authenticateUser(res.accessToken);
    }));
  }

  resendVerificationEmail(): Observable<any> {
    const url = `${environment.api}/auth/resend-verification`;
    return this.http.post(url, null);
  }

  acceptInvitation(payload: AcceptInvitePayload): Observable<LoginResponse> {
    const url = `${environment.api}/auth/accept-invite`;
    return this.http.post<LoginResponse>(url, payload);
  }

  updateCreditCard(payload: CreditCard): Observable<User> {
    const url = `${environment.api}/auth/credit-card`;
    return this.http.post<User>(url, payload).pipe(
      tap(res => {
        this.user = res;
        this.user$.next(this.user);
      })
    );
  }

  getAuth(): Observable<User> {
    const url = `${environment.api}/auth`;
    return this.http.get<User>(url).pipe(
      tap(res => {
        this.user = res;
        this.user$.next(this.user);
      })
    );
  }

  updateProfile(profile: Profile): Observable<User> {
    const url = `${environment.api}/auth/profile`;
    return this.http.put<User>(url, profile).pipe(
      tap(res => {
        this.user = res;
        this.user$.next(this.user);
      })
    );
  }

  authenticateUser(token: string) {
    this.accessToken = token;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.getAuth().toPromise();
  }

  async decodeToken(): Promise<DecodedToken> {
    try {
      const token = this.accessToken;
      return jwt_decode(token);
    } catch (e) {
      return null;
    }
  }

  async navigateByUserRole(role?: UserRole) {
    if (!role) {
      const token = await this.decodeToken();
      role = token.role;
    }
    if (role === UserRole.Customer) {
      this.router.navigate([ROUTES.app.root, ROUTES.app.myProjects]);
    } else if (role === UserRole.Contractor || role === UserRole.SuperAdmin) {
      this.router.navigate([ROUTES.admin.root, ROUTES.admin.dashboard]);
    } else {
      this.logout();
    }
  }
}
