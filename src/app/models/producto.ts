export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    idCatetoria: number;
    idProveedor: number;
    iva: number;
    retencion: number; 

    constructor(nombre: string, precio: number, cantidad: number, descripcion: string, idCatetoria: number, idProveedor: number, iva: number, retencion: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.idCatetoria = idCatetoria;
        this.idProveedor = idProveedor;
        this.iva = iva;
        this.retencion = retencion;
    }


}


