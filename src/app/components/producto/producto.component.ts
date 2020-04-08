import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Categoria } from 'src/app/modelo/Categoria';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent   {
  producto: any = {};
  categoriaProducto: string;
  categoria: Categoria[];
  productos: Producto[];
  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService
              ) {
                this.activatedRoute.params.subscribe(params => {
                  this.producto = this.productosService.getProducto( params['id'] );
                  console.log(this.producto);
              });
              }


              idCategoria(i: number) {
                this.categoriaProducto = this.categoria[i].tipo;
                return this.categoriaProducto;
              }

}
