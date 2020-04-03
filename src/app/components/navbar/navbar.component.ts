import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private _productosService: ProductosService, private router: Router) {
    _productosService.getProductos();
   }

  ngOnInit(): void {
  }

}
