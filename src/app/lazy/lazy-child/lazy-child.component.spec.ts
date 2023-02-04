import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
// Manually removed SharedModule import
import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      // Manually added LazyChildComponent to imports
      imports: [
        HttpClientModule,
        // Manually removed SharedModule import
        FormsModule,
        LazyChildComponent,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LazyChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
