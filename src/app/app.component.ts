import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav>
        <a routerLink="">Home</a> | <a routerLink="/child">Child</a> |
        <a routerLink="/lazy">Lazy</a>
      </nav>
      <pre>{{ user$ | async | json }}</pre>
    </div>

    <!-- Manually removed app-eager-child because it isn't imported -->
    <!-- <app-eager-child></app-eager-child> -->

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  user$ = this.oidcSecurityService.getUserData();

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log(auth.isAuthenticated);
      console.log(auth.userData);
    });
  }
}
