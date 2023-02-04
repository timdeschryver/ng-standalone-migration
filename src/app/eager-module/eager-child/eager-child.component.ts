import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
})
export class EagerChildComponent {
  form = this.fb.group({
    name: [''],
  });
  constructor(private fb: FormBuilder) {}
}
