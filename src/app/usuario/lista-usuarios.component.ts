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
    private usuarioServide : UsuarioService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    //this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

//   cargarProductos(): void {
//     this.usuarioServide.lista().subscribe(
//       data => {
//         this.usuarios = data;
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   borrar(id: number) {
//     this.usuarioServide.delete(id).subscribe(
//       data => {
//         this.toastr.success('Producto Eliminado', 'OK', {
//           timeOut: 3000, positionClass: 'toast-top-center'
//         });
//         this.cargarProductos();
//       },
//       err => {
//         this.toastr.error(err.error.mensaje, 'Fail', {
//           timeOut: 3000, positionClass: 'toast-top-center',
//         });
//       }
//     );
//   }

}