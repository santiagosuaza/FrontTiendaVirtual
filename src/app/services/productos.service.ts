import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';
import { Categoria } from '../modelo/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) { }


  getProducto(id: number): Observable<any> {
  return this.http.get('http://localhost:8080//tienda/producto/' + id);
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

    return this.http.get<Categoria[]>('http://localhost:8080/tienda/categorias');
  }
  getCategoria(id: string) {
    return this.http.get<Categoria>('http://localhost:8080/tienda/categoria/' + id);

    }

  getProductos(): Observable<any> {
    return  this.http.get('http://localhost:8080/tienda/ConsultarTodosProductos');
  }
}
