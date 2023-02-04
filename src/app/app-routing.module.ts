import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'child',
    component: ChildComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'lazy',
    canActivate: [AutoLoginPartialRoutesGuard],
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
