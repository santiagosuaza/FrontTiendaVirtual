import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicesService {

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<any> {
   return this.http.get('http://localhost:8080/tienda/cliente/' + id);
  }
  createCliente(cliente: Cliente): Observable<Cliente> {
   return this.http.post<Cliente>('http://localhost:8080/tienda/cliente', cliente);
  }

  deleteCliente(id: number) {
  return this.http.delete('http://localhost:8080/tienda/cliente/' + id);
  }

  getClientes(): Observable<any> {
    return this.http.get('http://localhost:8080/tienda/clientes');
  }
}

