import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

const routes: Routes = [
  {
    path: '',
    component: LazyChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
