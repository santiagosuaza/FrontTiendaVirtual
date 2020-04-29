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
  return this.http.get('http://localhost:8080/tienda/producto/' + id);
  }
  crearProducto(producto: Producto): Observable<Producto> {
  return this.http.post<Producto>('http://localhost:8080/tienda/producto', producto );
  }
  getProductos(): Observable<any> {
    return  this.http.get('http://localhost:8080/tienda/ConsultarTodosProductos');
  }
  borrarProducto(id: number) {
    return this.http.delete('http://localhost:8080/tienda/producto/' + id );
  }
  getCategorias() {
    return this.http.get<Categoria[]>('http://localhost:8080/tienda/categorias');
  }
  getCategoria(id: string) {
    return this.http.get<Categoria>('http://localhost:8080/tienda/categoria/' + id);
  }
}
