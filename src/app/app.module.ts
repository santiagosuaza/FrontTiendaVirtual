import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AdministradorClienteComponent } from './components/administrador-cliente/administrador-cliente.component';
import { AdministradorAdminComponent } from './components/administrador-admin/administrador-admin.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { TodosComponent } from './components/todos/todos.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductoComponent,
    AdministradorClienteComponent,
    AdministradorAdminComponent,
    BuscarComponent,
    RegistrarProductoComponent,
    TodosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
