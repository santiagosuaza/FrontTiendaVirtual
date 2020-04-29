import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Categoria } from 'src/app/modelo/Categoria';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoriaProducto: string;
  categorias: Categoria[];
  constructor(private activateRoute: ActivatedRoute, private productosService: ProductosService, private router: Router) {
    productosService.getProductos();
   }

  ngOnInit() {
    this.productosService.getCategorias().subscribe(
      data =>   this.categorias = data);
  }
  CategoriaProducto(termino: string) {
  this.router.navigate(['categoria', termino]);
  }
  buscarProducto(termino: string) {
  this.router.navigate(['/buscar', termino]);
  }
  tipos(termino: string) {
  this.router.navigate(['categoria', termino]);
  }
  idCategoria(i: number) {
 this.categoriaProducto = this.categorias[i].tipo;
 return this.categoriaProducto;

}

}
