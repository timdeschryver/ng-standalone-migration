import { TestBed } from '@angular/core/testing';
import { EagerChildComponent } from './eager-child.component';

describe('EagerChildComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EagerChildComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EagerChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
