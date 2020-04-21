import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  getCategoria(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/tienda/categoria' + id);
  }
  crearCategoria(categoria: Categoria) {
    return this.http.post<Categoria>('http://localhost:8080//tienda/categoria',
    categoria
    );
  }
  borrarCategoria(id: string) {
    return this.http.post<Categoria>('http://localhost:8080/tienda/agregarProducto',
     id
     );
  }
  agregarCategoria(categoria: Categoria) {
    return this.http.post<Categoria>('http://localhost:8080/tienda/categoria', categoria);
  }
}
