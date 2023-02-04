import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SensitivePipe } from './pipes/sensitive.pipe';

@NgModule({
  declarations: [SensitivePipe],
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  exports: [MatInputModule, MatFormFieldModule, SensitivePipe],
})
export class SharedModule {}
