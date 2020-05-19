import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../modelo/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServicesService } from '../../../services/cliente-services.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
cliente: Cliente;
id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteServicesService
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.cliente = new Cliente();
    this.clienteService. getCliente(this.id) .subscribe(data => {
    console.log(data);
    this.cliente = data;
    }, error => console.log(error));

  }
}
