import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { SharedModule } from '../shared-module/shared.module';
import { LazyRoutingModule } from './lazy-routing.module';
import { HighlightModule } from '../highlight-directive/highlight.module';

@NgModule({
  declarations: [LazyChildComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
    FormsModule,
    HighlightModule,
  ],
})
export class LazyModule {}
