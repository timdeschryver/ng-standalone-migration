import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SensitivePipe } from '../../shared-module/pipes/sensitive.pipe';
// Manually removed SharedModule and EagerModule import
import { EagerChildComponent } from './eager-child.component';

describe('EagerChildComponent with declarations', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Manually added EagerChildComponent, SensitivePipe to imports
      imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        EagerChildComponent,
        SensitivePipe,
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EagerChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('EagerChildComponent with shared module', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Manually added EagerChildComponent to imports
      // Manually removed SharedModule  import
      imports: [ReactiveFormsModule, EagerChildComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EagerChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('EagerChildComponent with eager module', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Manually removed EagerModule import
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EagerChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
