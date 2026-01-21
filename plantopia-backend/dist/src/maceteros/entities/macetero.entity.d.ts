import { Producto } from "src/productos/entities/producto.entity";
import { FormaMacetero } from "./enum-macetero";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class Macetero extends Producto {
    alto: number;
    ancho: number;
    peso: number;
    capacidad: number;
    material: string;
    color: string;
    forma: FormaMacetero;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, idCategoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string, alto: number, ancho: number, peso: number, capacidad: number, material: string, color: string, forma: FormaMacetero);
}
