import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Categoria } from 'src/app/modelo/Categoria';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit   {

  id: number;
  categoriaProducto: string;
  categoria: Categoria[];
  producto: Producto;
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private productosService: ProductosService) { }
   ngOnInit() {
                this.producto = new Producto();
                this.id = this.activatedRoute.snapshot.params['id'];

                this.productosService.getProducto(this.id)
                .subscribe(data => {
                  console.log(data);
                  this.producto = data;
                }, error => console.log(error));

                this.productosService.getCategorias().subscribe(
                  data =>   this.categoria = data);
             }

      pCategoria() {
     return  this.categoria[this.producto.idCategoria - 1].tipo;

     }

}
