

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modelo/Cliente';
import { ClienteServicesService } from '../../../services/cliente-services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 clientes: Observable<Cliente[]>;
 id: number;

  constructor(
   private service: ClienteServicesService,
   private router: Router
  ) { }

  ngOnInit(): void {
    this.recargarDatos();
  }
  recargarDatos() {
    this.clientes = this.service.getClientes();
  }
  borrarCliente(id: any) {
    this.service.deleteCliente(id).subscribe(data => {
      console.log(data);
      this.recargarDatos();
    },
    error => console.log(error));
  }
  verCliente(id: number) {
    this.router.navigate(['cliente', id]);
  }
}
