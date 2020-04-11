import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProducto'
})
export class BuscarProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) { return value; }
    const resultPosts = [];
    for (const producto of value) {
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(producto);
      }
    }
    return resultPosts;
  }


}
