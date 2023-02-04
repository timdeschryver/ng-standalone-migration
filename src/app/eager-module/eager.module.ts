import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EagerChildComponent } from './eager-child/eager-child.component';
import { SharedModule } from '../shared-module/shared.module';
import { HighlightModule } from '../highlight-directive/highlight.module';

@NgModule({
  declarations: [EagerChildComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, HighlightModule],
  exports: [EagerChildComponent],
})
export class EagerModule {}
