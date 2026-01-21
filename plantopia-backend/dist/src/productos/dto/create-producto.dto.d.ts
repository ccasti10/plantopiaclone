import { TipoProductos } from '../entities/enum-productos';
export declare class CreateProductoDto {
    nombreProducto: string;
    imagenProducto: string[];
    descuento?: number;
    precioNormal: number;
    coberturaDeDespacho: string[];
    stock: number;
    descripcionProducto: string;
    categoria: TipoProductos;
}
