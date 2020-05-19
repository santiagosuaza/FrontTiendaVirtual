
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { Component } from '@angular/core';
import { ProductosAdminComponent } from './components/administracion/productos-admin/productos-admin.component';
import { CategoriasAdminComponent } from './components/administracion/categorias-admin/categorias-admin.component';
import { HomeadminComponent } from './components/administracion/homeadmin/homeadmin.component';
import { Cliente } from './modelo/Cliente';
import { ClienteComponent } from './components/administracion/cliente/cliente.component';
import { ProductoAgregarComponent } from './components/administracion/producto-agregar/producto-agregar.component';
import { PedidosComponent } from './components/administracion/pedidos/pedidos.component';
import { AdminComprasComponent } from './components/administracion/admin-compras/admin-compras.component';
import { AdminCompraComponent } from './components/administracion/admin-compra/admin-compra.component';


const APP_ROUTES: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'productos', component : ProductosComponent},
 // {path: '**', pathMatch: 'full', redirectTo: 'productos' },
  {path: 'producto/:id', component : ProductoComponent},
  {path: 'buscar/:id', component: BuscarComponent},
  {path: 'categoria/:id', component: CategoriasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'homeAdmin', component: HomeadminComponent},
  {path: 'productosAdmin', component: ProductosAdminComponent },
  {path: 'categoriasAdmin', component : CategoriasAdminComponent},
  {path: 'cliente/:id', component : ClienteComponent},
  {path: 'productoAgregar', component : ProductoAgregarComponent},
  {path: 'pedidos', component : PedidosComponent},
  {path: 'admin-compras', component : AdminComprasComponent},
  {path: 'admin-compra/:id', component : AdminCompraComponent},
  {path: 'cliente/:id', component : ClienteComponent},
  {path: 'clientes', component : ClientesComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


