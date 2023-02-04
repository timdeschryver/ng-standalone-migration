import { Route } from '@angular/router';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

export const routes: Route[] = [
  {
    path: '',
    component: LazyChildComponent,
  },
];
