import { TipoProductos } from './enum-productos';
export declare class Producto {
    idProducto: number;
    nombreProducto: string;
    imagenProducto: string[];
    descuento: number;
    precioNormal: number;
    coberturaDeDespacho: string[];
    stock: number;
    descripcionProducto: string;
    categoria: TipoProductos;
    valoracion: number;
    cantidadVentas: number;
    codigoProducto: string;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, categoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string);
}
