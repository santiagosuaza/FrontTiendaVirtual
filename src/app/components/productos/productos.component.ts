import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { Categoria } from '../../modelo/Categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Observable<Producto[]>;
  categoria: Categoria[];
  index: number;
  codigo: string;
  categoriaProducto: string;

  constructor(
    private productoService: ProductosService,
    private router: Router
    ) {  console.log('Estoy en el constructor');
  }

  ngOnInit() {

   this.productos = this.productoService.getProductos();
   this.productoService.getCategorias().subscribe(
      data =>   this.categoria = data);
  }

  verProducto(id: number) {
    console.log('este es el id ', id);
    this.router.navigate(['producto', id]);
  }
  tipo(i: number) {
    return this.categoria[i - 1].tipo;
  }

}
