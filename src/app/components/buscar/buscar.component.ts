import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/modelo/Producto';
import { Categoria } from 'src/app/modelo/Categoria';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  termino: string;
 productos: Observable<Producto[]>;
  categoria: Categoria[];
   index: number;
   codigo: string;
   categoriaProducto: string;


  constructor(
    private activatedRouted: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router
  ) {  console.log('Estoy en el constructor');
  }

  ngOnInit() {
    this.activatedRouted.params.subscribe( params => {
      console.log(params.termino);
      this.termino = params.termino; } );
    this.productos = this.productoService.getProductos();
    this.productoService.getCategorias().subscribe(
      data =>   this.categoria = data);
  }
  verProducto(id: number) {
    console.log('este es el id ', id);
    this.router.navigate(['producto', id]);
  }
  idCategoria(i: number) {
    this.categoriaProducto = this.categoria[i].tipo;
    return this.categoriaProducto;

  }

}

