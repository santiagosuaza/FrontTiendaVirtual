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
createCliente(cliente: object): Observable<object> {
  return this.http.post('http://localhost:8080/tienda/cliente', cliente);
}
deleteCliente(id: number): Observable<any> {
  return this.http.delete('http://localhost:8080/tienda/cliente/' + id);
}
getCLientes(): Observable<any> {
  return this.http.get('http://localhost:8080/tienda/clientes');
}
ConsultarClientes() {
  return this.http.get<Cliente[]>('http://localhost:8080/tienda/clientes');
}
}

