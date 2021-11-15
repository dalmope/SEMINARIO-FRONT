import { ChangePasswordComponent } from './changepassword/change-password.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './usuario/registro.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { ListaUsuariosComponent } from './usuario/lista-usuarios.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { NuevaCategoriaComponent } from './categoria/nueva-categoria.component';
import { ListaCategoriasComponent } from './categoria/lista-categorias.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'usuarios/registro', component: RegistroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'categorias/create', component: NuevaCategoriaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'categorias', component: ListaCategoriasComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'sendemail', component: SendEmailComponent, canActivate: [LoginGuard] },
  { path: 'change-password/:tokenPassword', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  { path: 'lista', component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
