export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    cantidad: number;
    cantidad_minima: number;
    iva: number;
    retencion: number; 
    categoria: number;
    // idProveedor: number;
    // descripcion: string;

    constructor(nombre: string, precio: number, cantidad: number, cantidad_minima: number, iva: number, retencion: number, categoria: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.cantidad_minima = cantidad_minima;
        this.iva = iva;
        this.retencion = retencion;
        this.categoria = categoria;
    }


}


