import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { AuthorizationGuard } from './auth/authorized.guard';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'child',
    component: ChildComponent,
    canActivate: [AutoLoginPartialRoutesGuard, AuthorizationGuard],
  },
  {
    path: 'lazy',
    canActivate: [AutoLoginPartialRoutesGuard, AuthorizationGuard],
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
