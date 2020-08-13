import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxStripeModule } from 'ngx-stripe';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { ToastrModule } from './ui-kit/toastr/toastr.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RedirectComponent } from './shared/redirect/redirect.component';

const config: SocketIoConfig = { url: environment.socket.url, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(environment.stripe.publicKey),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LocalStorageModule.forRoot({
      prefix: environment.localStorage.prefix,
      storageType: 'localStorage'
    }),
    SocketIoModule.forRoot(config),
    ScrollToModule.forRoot(),
    NgProgressModule,
    HttpClientModule,
    NgProgressRouterModule,
    ToastrModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
