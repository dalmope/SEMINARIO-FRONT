import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: NuevoUsuario[] = [];
  isAdmin = false;

  constructor(
    private usuarioService : UsuarioService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.usuarioService.delete(id).subscribe(
      data => {
        this.toastr.success('Usuario Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarUsuarios();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'No se pudo borrar el Usuario', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
