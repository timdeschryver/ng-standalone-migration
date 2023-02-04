import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app\\app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthConfigModule } from './app\\auth\\auth-config.module';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  authInterceptor,
  AutoLoginPartialRoutesGuard,
} from 'angular-auth-oidc-client';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { authenticatedGuard } from './app/auth/authorization.guard';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AuthConfigModule),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideRouter([
      {
        path: 'child',
        // New: Lazy load a child component
        loadComponent: () =>
          import('./app/child/child.component').then((m) => m.ChildComponent),
        canActivate: [AutoLoginPartialRoutesGuard, authenticatedGuard],
      },
      {
        path: 'lazy',
        canActivate: [AutoLoginPartialRoutesGuard, authenticatedGuard],
        loadChildren: () =>
          import('./app/lazy/lazy.routes').then((m) => m.routes),
      },
    ]),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
