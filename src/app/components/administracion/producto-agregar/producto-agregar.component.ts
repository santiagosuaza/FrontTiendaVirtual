import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';
import { Producto } from 'src/app/modelo/Producto';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {
 producto: Producto = new Producto();
 submitted = false;
  constructor(private router: Router, private service: ProductosService) { }

  ngOnInit(): void {
  }

  nuevoProducto(): void {
   this.submitted = false;
   this.producto = new Producto();
  }
  Guardar() {
  this.service.crearProducto(this.producto).subscribe(data =>    {
    alert('Se Agrego con Exito...!!!');
    console.log(this.producto);
     });
  this.irProductos();
  }


  onSubmit() {
    this.submitted = true;
    this.Guardar();
  }

  irProductos() {
    this.router.navigate(['/productosAdmin']);
  }

}
