import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Canasta } from 'src/app/modelo/Canasta';
import { CanastaService } from '../../../services/canasta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-compras',
  templateUrl: './admin-compras.component.html',
  styleUrls: ['./admin-compras.component.css']
})
export class AdminComprasComponent implements OnInit {
  canastas: Observable<Canasta[]>;
  constructor(
   private service: CanastaService,
   private router: Router
  ) { }

  ngOnInit(): void {
    this.recargarDatos();
  }
  recargarDatos() {
    this.canastas = this.service.getCanastas();
  }
  verCanasta(id: number) {
    this.router.navigate(['admin-compra', id]);
  }


}
