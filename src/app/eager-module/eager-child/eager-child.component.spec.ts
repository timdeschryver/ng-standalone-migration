import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SensitivePipe } from '../../shared-module/pipes/sensitive.pipe';
import { SharedModule } from '../../shared-module/shared.module';
import { EagerModule } from '../eager.module';
import { EagerChildComponent } from './eager-child.component';

describe('EagerChildComponent with declarations', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EagerChildComponent, SensitivePipe],
      imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
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
      declarations: [EagerChildComponent],
      imports: [SharedModule, ReactiveFormsModule],
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
      imports: [EagerModule, ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EagerChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
