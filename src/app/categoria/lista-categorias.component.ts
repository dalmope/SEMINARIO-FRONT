import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: Categoria[] = [];
  isAdmin = false;

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarCategorias();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(
      data => {
        this.toastr.success('Categoria Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCategorias();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
