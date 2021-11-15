import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

  nombre = '';

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const categoria = new Categoria(this.nombre);
    console.log(categoria);
    this.categoriaService.postCategoria(categoria).subscribe(
      
      data => {
        console.log(this.nombre);
        this.toastr.success('Categoria Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/categorias']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}