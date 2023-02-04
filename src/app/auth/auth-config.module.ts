import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://dev-n533ewmrz1oalj0i.us.auth0.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'Kmbu0VflyILdjMr1CjUoUg0NjhiT8N3C',
        scope: 'openid profile email',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
        unauthorizedRoute: '/',
        postLoginRoute: '/',
        secureRoutes: ['https://jsonplaceholder.typicode.com/'],
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
