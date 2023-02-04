import { Component } from '@angular/core';
import { FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { SensitivePipe } from '../../shared-module/pipes/sensitive.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HighlightDirective } from '../../highlight-directive/highlight.directive';

@Component({
    selector: 'app-eager-child',
    template: `
    <div class="container" [formGroup]="form">
      <p><span appHighlight>eager-child</span> works!</p>
      <p>{{ 'eager-child works!' | sensitive }}</p>
      <mat-form-field>
        <mat-label>lazy-child</mat-label>
        <input matInput type="text" formControlName="name" />
      </mat-form-field>
    </div>
  `,
    standalone: true,
    imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, HighlightDirective, MatFormFieldModule, MatInputModule, SensitivePipe]
})
export class EagerChildComponent {
  form = this.fb.group({
    name: [''],
  });
  constructor(private fb: FormBuilder) {}
}
