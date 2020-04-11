
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AgregarProductoComponent } from './components/administracion/agregar-producto/agregar-producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


const APP_ROUTES: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'productos', component : ProductosComponent},
  {path: 'agregar', component : AgregarProductoComponent},
 // {path: '**', pathMatch: 'full', redirectTo: 'productos' },
  {path: 'producto/:id', component : ProductoComponent},
  {path: 'buscar/:termino', component: BuscarComponent},
  {path: 'categoria/:termino', component: CategoriasComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


