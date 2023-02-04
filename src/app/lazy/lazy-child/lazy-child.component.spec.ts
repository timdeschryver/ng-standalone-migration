import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared-module/shared.module';
import { LazyChildComponent } from './lazy-child.component';

describe('LazyChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      // Manually added LazyChildComponent to imports
      imports: [
        HttpClientModule,
        SharedModule,
        FormsModule,
        LazyChildComponent,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LazyChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
