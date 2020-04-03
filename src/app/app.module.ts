import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AdministradorClienteComponent } from './components/administrador-cliente/administrador-cliente.component';
import { AdministradorAdminComponent } from './components/administrador-admin/administrador-admin.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './services/productos.service';

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
    ProductosComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
