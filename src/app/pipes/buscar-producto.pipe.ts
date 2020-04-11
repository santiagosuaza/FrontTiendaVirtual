import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProducto'
})
export class BuscarProductoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
