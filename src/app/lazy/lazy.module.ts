import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
    imports: [
    CommonModule,
    LazyRoutingModule,
    FormsModule,
    LazyChildComponent
]
})
export class LazyModule {}
