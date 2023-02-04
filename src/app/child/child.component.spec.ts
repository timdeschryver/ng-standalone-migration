import { TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
