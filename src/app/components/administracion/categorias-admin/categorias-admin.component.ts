import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/modelo/Categoria';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']
})
export class CategoriasAdminComponent implements OnInit {
categorias: Observable<Categoria[]>;
categoria: Categoria = new Categoria();

  constructor(
    private service: CategoriaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.recargarDatos();
  }
  recargarDatos() {
   this.categorias = this.service.getCategorias();
 }
 Guardar() {
   this.service.crearCategoria(this.categoria).subscribe(data =>    {
     alert('Se Agrego con Exito...!!!');
     console.log(this.categoria);
    });
   this.recargarDatos();
 }
  borrar(id: any) {
   this.service.borrarCategoria(id).subscribe(data => {
    console.log(data);
    this.recargarDatos();
     },
    error => console.log(error));
  }

}
