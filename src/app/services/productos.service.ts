import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';
import { Categoria } from '../modelo/Categoria';

@Injectable()
export class ProductosService {

  constructor( private http: HttpClient) { }
  getProductos() {
   return this.http.get<Producto[]>('http://localhost:8080/tienda/ConsultarTodosProductos');
  }

  getProducto(id: number) {
  return this.http.get<Producto>('http://localhost:8080/tienda/consultarProducto/' + id);
  }
  crearProducto(producto: Producto) {
    return this.http.post<Producto>('http://localhost:8080/tienda/agregarProducto',
    producto
    );
  }
  borrarPrducto(id: string) {
    return this.http.post<Producto>('http://localhost:8080/tienda/agregarProducto',
     id
     );
  }
  agregarProducto(producto: Producto) {
    return this.http.post<Producto>(
      'http://localhost:8080/tienda/agregarProducto',
      producto
      );
  }
  getCategorias() {

    return this.http.get<Categoria[]>('http://localhost:8080/tienda/ConsultarTodosCategoria');
  }
  getCategoria(id: string) {
    return this.http.get<Categoria>('http://localhost:8080/tienda/consultarProducto' + id);

    }
}
