import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../modelo/Cliente';
import { ClienteServicesService } from '../../../services/cliente-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes: Observable<Cliente[]>;

  constructor(private route: ActivatedRoute,private router: Router,
              private clienteServicesService: ClienteServicesService) { }

  ngOnInit() {
   this.recargarDatos();
  }
  recargarDatos() {
    this.clientes = this.clienteServicesService.getCLientes();
  }
  deleteCliente(id: number){
    this.clienteServicesService.deleteCliente(id).subscribe(
      data => {
        console.log(data);
        this.recargarDatos();
      },
      error => console.log(error));
}
clienteDetalle(id: number) {
this.router.navigate(['cliente', id]);
}
}
