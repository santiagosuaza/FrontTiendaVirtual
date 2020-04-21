import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/Categoria';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {
  productos: Observable<Producto[]>;
  categoria: Categoria[];
  index: number;
  codigo: string;
  categoriaProducto: string;
  constructor(
    private productoService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recargarDatos();
    this.productoService.getCategorias().subscribe(
      data =>   this.categoria = data);
  }
  recargarDatos() {
    this.productos = this.productoService.getProductos();
   }
   tipo(i: number) {
    return this.categoria[i - 1].tipo;
  }
  verProducto(id: number) {
    console.log('este es el id ', id);
    this.router.navigate(['producto', id]);
  }
  agregarProducto() {
    this.router.navigate(['productoAgregar']);
  }
  borrarProducto(id: number) {
    this.productoService.borrarProducto(id).subscribe(data => {
      console.log(data);
      this.recargarDatos();
    },
    error => console.log(error));
  }

}
