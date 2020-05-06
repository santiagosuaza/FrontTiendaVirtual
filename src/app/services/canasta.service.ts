import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanastaService {

  constructor(private http: HttpClient) { }
 getCanastas(): Observable<any> {
   return this.http.get('http://localhost:8080/tienda/Canastas');
 }
 getCanasta(id: number): Observable<any> {
   return this.http.get('http://localhost:8080/tienda/canasta/' + id);
 }
 borrarCanasta(id: number) {
   return this.http.delete('http://localhost:8080/tienda/canasta/' + id);
 }
}
