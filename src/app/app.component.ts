import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EagerChildComponent } from './eager-module/eager-child/eager-child.component';

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

    <app-eager-child></app-eager-child>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  // Manually added EagerChildComponent
  imports: [RouterLink, RouterOutlet, AsyncPipe, JsonPipe, EagerChildComponent],
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
