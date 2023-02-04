import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LazyChildComponent } from './lazy-child.component';
import { provideHttpClient } from '@angular/common/http';

describe('LazyChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      imports: [LazyChildComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    const fixture = TestBed.createComponent(LazyChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
