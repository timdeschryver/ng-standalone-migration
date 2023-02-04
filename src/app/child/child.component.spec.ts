import { TestBed } from '@angular/core/testing';
import { SensitivePipe } from '../shared-module/pipes/sensitive.pipe';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  it('should create the component', async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent, SensitivePipe],
    }).compileComponents();

    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
