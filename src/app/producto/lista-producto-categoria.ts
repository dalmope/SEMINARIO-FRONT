import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Producto } from "../models/producto";
import { ProductoService } from "../service/producto.service";
import { TokenService } from "../service/token.service";

@Component({
    selector: 'app-lista-producto-categoria',
    templateUrl: './lista-producto-categoria.html',
    styleUrls: ['./lista-producto-categoria.css']
  })
  export class ListaProductoCategoria implements OnInit {

    productos: Producto[] = [];
    isAdmin = false;

    constructor(
        private productoService: ProductoService,
        private activatedRoute: ActivatedRoute,
        private tokenService: TokenService,
        private toastr: ToastrService,
        private router: Router
      ) { }

      ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.cargarProductos(id);
        this.isAdmin = this.tokenService.isAdmin();
        
        this.productoService.productByCategoria(id).subscribe(
          data => {
            console.log(data);
            this.productos = data;
          },
          err => {
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000,  positionClass: 'toast-top-center',
            });
            this.volver();
          }
        );
      }

      cargarProductos(id: number): void {
        this.productoService.productByCategoria(id).subscribe(
          data => {
            this.productos = data;
          },
          err => {
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000,  positionClass: 'toast-top-center',
            });
            console.log(err);
            this.volver();
          }
        );
      }
    
      volver(): void {
        this.router.navigate(['/lista']);
      }
  }