import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoOperacao',
   standalone: true
})
export class TipoOperacaoPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return 'IMPORTAÇÃO';
      case 2: return 'EXPORTAÇÃO';
      default: return '';
    }
  }
}
