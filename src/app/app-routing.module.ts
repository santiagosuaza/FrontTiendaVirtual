
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AgregarProductoComponent } from './components/administracion/agregar-producto/agregar-producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { Component } from '@angular/core';
import { ProductosAdminComponent } from './components/administracion/productos-admin/productos-admin.component';
import { CategoriasAdminComponent } from './components/administracion/categorias-admin/categorias-admin.component';
import { HomeadminComponent } from './components/administracion/homeadmin/homeadmin.component';
import { Cliente } from './modelo/Cliente';
import { ClienteComponent } from './components/administracion/cliente/cliente.component';


const APP_ROUTES: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'productos', component : ProductosComponent},
 // {path: '**', pathMatch: 'full', redirectTo: 'productos' },
  {path: 'producto/:id', component : ProductoComponent},
  {path: 'buscar/:termino', component: BuscarComponent},
  {path: 'categoria/:termino', component: CategoriasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'homeAdmin', component: HomeadminComponent},
  {path: 'productosAdmin', component: ProductosAdminComponent },
  {path: 'agregarProductos', component : AgregarProductoComponent},
  {path: 'categoriasAmin', component : CategoriasAdminComponent},
  {path: 'cliente', component : ClienteComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


