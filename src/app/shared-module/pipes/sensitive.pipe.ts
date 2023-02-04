import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sensitive',
})
export class SensitivePipe implements PipeTransform {
  transform(value: string) {
    return Array.from({ length: value?.length ?? 0 }, () => {
      return '*';
    }).join('');
  }
}
