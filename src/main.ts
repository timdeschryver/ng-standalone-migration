import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app\\app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthConfigModule } from './app\\auth\\auth-config.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  AuthInterceptor,
  AutoLoginPartialRoutesGuard,
} from 'angular-auth-oidc-client';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AuthConfigModule),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideRouter([
      {
        path: 'child',
        // New: Lazy load a child component
        loadComponent: () =>
          import('./app/child/child.component').then((m) => m.ChildComponent),
        canActivate: [AutoLoginPartialRoutesGuard],
      },
      {
        path: 'lazy',
        canActivate: [AutoLoginPartialRoutesGuard],
        loadChildren: () =>
          import('./app/lazy/lazy.routes').then((m) => m.routes),
      },
    ]),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
