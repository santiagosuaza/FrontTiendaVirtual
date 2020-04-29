import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelo/Categoria';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/modelo/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
 termino: string;
 productos: Observable<Producto[]>;
 categoria: Categoria;
 id: number;


 constructor(
  private activatedRouted: ActivatedRoute,
  private productoService: ProductosService,
  private categoriaService: CategoriaService,
  private router: Router) { }

 ngOnInit() {
    this.categoria = new Categoria();
    this.productos = this.productoService.getProductos();
    this.id = this.activatedRouted.snapshot.params['id'];
    this.categoriaService.getCategoria(this.id) .subscribe(data => {
    console.log(data);
    this.categoria = data;
   }, error => console.log(error));
  }

  verProducto(id: number) {
    console.log('este es el id ', id);
    this.router.navigate(['producto', id]);
  }


 }
