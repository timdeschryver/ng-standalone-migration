import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-lazy-child',
  template: `
    <div class="container">
      <p><span appHighlight>lazy-child</span> works!</p>
      <p>{{ 'eager-child works!' | sensitive }}</p>
      <mat-form-field>
        <mat-label>eager-child</mat-label>
        <input matInput type="text" name="name" [(ngModel)]="form.name" />
      </mat-form-field>

      <pre>{{ todos$ | async | json }}</pre>
    </div>
  `,
})
export class LazyChildComponent {
  form = {
    name: '',
  };

  todos$ = this.placeholderService.getTodos();
  constructor(private placeholderService: JsonPlaceholderService) {}
}
