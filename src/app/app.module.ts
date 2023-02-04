import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerModule } from './eager-module/eager.module';
import { AuthConfigModule } from './auth/auth-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared-module/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'angular-auth-oidc-client';

@NgModule({
  // Manually removed ChildComponent from declarations
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerModule,
    AuthConfigModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
