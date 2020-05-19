import { Component, OnInit } from '@angular/core';
import { Canasta } from 'src/app/modelo/Canasta';
import { Cliente } from '../../../modelo/Cliente';
import { Producto } from '../../../modelo/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServicesService } from '../../../services/cliente-services.service';
import { CanastaService } from '../../../services/canasta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-compra',
  templateUrl: './admin-compra.component.html',
  styleUrls: ['./admin-compra.component.css']
})
export class AdminCompraComponent implements OnInit {
canasta: Canasta;
cliente: Cliente;
id: number;
productos: Observable<Producto[]>;
  constructor(   private activatedRoute: ActivatedRoute,
                 private router: Router,
                 private clienteService: ClienteServicesService,
                 private canastaService: CanastaService

  ) {}

  ngOnInit() {
   this.id = this.activatedRoute.snapshot.params['id'];
   this.canastaService.getCanasta(this.id)
    .subscribe(data => {
     console.log(data);
     this.canasta = data;
     this.getCliente(this.canasta.idCliente);
    }, error => console.log(error));

   this.productos = this.canastaService.getProductosCanasta(this.id);
  }

getCliente(clave: number) {
  this.clienteService.getCliente(clave).subscribe(data => {
    this.cliente = data;
    }, error => console.log(error));
}
}
