
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';


const APP_ROUTES: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'productos', component : ProductosComponent},
  {path: 'agregar', component : AgregarProductoComponent},
 // {path: '**', pathMatch: 'full', redirectTo: 'productos' },
  {path: 'producto/:id', component : ProductoComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});


