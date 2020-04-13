import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelo/Categoria';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/modelo/Producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  termino: string;
  productos: Producto[];
   categoria: Categoria[];
    index: number;
    codigo: string;
    categoriaProducto: string;

   constructor(
     private activatedRouted: ActivatedRoute,
     private productoService: ProductosService,
     private router: Router
   ) { }
   ngOnInit() {
     this.activatedRouted.params.subscribe( params => {
       console.log(params.termino);
       this.termino = params.termino; } );
     this.productoService.getProductos().subscribe(data => {
       this.productos = data;
     });
     this.productoService.getCategorias().subscribe(
       data =>   this.categoria = data);
   }
   verProducto(id: number) {
     console.log('este es el id ', id);
     this.router.navigate(['producto', 'id']);
   }
   tipo() {
     this.categoriaProducto = this.categoria[this.productos[this.termino]].tipo;
   }
 }
