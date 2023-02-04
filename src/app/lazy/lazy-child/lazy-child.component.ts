import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { SensitivePipe } from '../../shared-module/pipes/sensitive.pipe';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ɵInternalFormsSharedModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HighlightDirective } from '../../highlight-directive/highlight.directive';

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
    standalone: true,
    imports: [HighlightDirective, MatFormFieldModule, MatInputModule, ɵInternalFormsSharedModule, FormsModule, AsyncPipe, JsonPipe, SensitivePipe]
})
export class LazyChildComponent {
  form = {
    name: '',
  };

  todos$ = this.placeholderService.getTodos();
  constructor(private placeholderService: JsonPlaceholderService) {}
}
