import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './usuario/registro.component';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';
import { IndexComponent } from './index/index.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { ListaUsuariosComponent } from './usuario/lista-usuarios.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaCategoriasComponent } from './categoria/lista-categorias.component';
import { NuevaCategoriaComponent } from './categoria/nueva-categoria.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { ListaProductoCategoria } from './producto/lista-producto-categoria';




@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleUsuarioComponent,
    ListaProductoCategoria,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    AsideComponent,
    IndexComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    ListaCategoriasComponent,
    NuevaCategoriaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
