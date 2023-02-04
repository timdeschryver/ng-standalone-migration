import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <p>child works!</p>
      <p>{{ 'child works!' | sensitive }}</p>
    </div>
  `,
})
export class ChildComponent {}
