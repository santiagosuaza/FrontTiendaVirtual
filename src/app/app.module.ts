import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './services/productos.service';
import { HomeadminComponent } from './components/administracion/homeadmin/homeadmin.component';
import { PedidosComponent } from './components/administracion/pedidos/pedidos.component';
import { AgregarProductoComponent } from './components/administracion/agregar-producto/agregar-producto.component';
import { BuscarProductoPipe } from './buscar-producto.pipe';
import { BuscarCategoriasPipe } from './pipes/buscar-categorias.pipe';
import { CategoriasComponent } from './components/categorias/categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductoComponent,
    BuscarComponent,
    ProductosComponent,
    HomeadminComponent,
    PedidosComponent,
    AgregarProductoComponent,
    BuscarProductoPipe,
    BuscarCategoriasPipe,
    CategoriasComponent
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
