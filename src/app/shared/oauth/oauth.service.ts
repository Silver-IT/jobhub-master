import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService as SocialLoginService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable()
export class OauthService {

  constructor(
    private socialLoginService: SocialLoginService
  ) { }

  signInWithGoogle(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      this.socialLoginService.authState.pipe(
        take(2)
      ).subscribe((user: SocialUser) => {
        resolve(user);
      }, err => reject(err));
      this.socialLoginService.signIn(GoogleLoginProvider.PROVIDER_ID);
    });
  }
}
