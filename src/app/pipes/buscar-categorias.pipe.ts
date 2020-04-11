import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarCategorias'
})
export class BuscarCategoriasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
