import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      imports: [LazyChildComponent],
      providers: [provideHttpClient(), provideHttpClient()],
    }).compileComponents();

    const fixture = TestBed.createComponent(LazyChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
