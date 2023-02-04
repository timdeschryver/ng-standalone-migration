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
    standalone: true,
    imports: [SensitivePipe]
})
export class ChildComponent {}
