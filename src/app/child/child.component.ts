import { Component } from '@angular/core';
import { SensitivePipe } from '../shared-module/pipes/sensitive.pipe';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <p>child works!</p>
      <p>{{ 'child works!' | sensitive }}</p>
    </div>
  `,
  // Manually set standalone to true
  standalone: true,
  // Manually added SensitivePipe to imports
  imports: [SensitivePipe],
})
export class ChildComponent {}
