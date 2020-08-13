import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceConfig, GoogleLoginProvider, LoginOpt, SocialLoginModule } from 'angularx-social-login';

import { OauthService } from './oauth.service';
import { environment } from '../../../environments/environment';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events'
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleOauthClientId, googleLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    OauthService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class OauthModule {
  static forRoot(): ModuleWithProviders<OauthModule> {
    return {
      ngModule: OauthModule,
      providers: [ OauthService ]
    };
  }
}
