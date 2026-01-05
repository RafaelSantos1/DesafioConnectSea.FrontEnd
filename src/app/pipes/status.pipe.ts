import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
   standalone: true
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return 'PREVISTA';
      case 2: return 'CANCELADA';
      case 3: return 'ATRACADA';
      case 4: return 'SAIU';
      default: return '';
    }
  }
}
