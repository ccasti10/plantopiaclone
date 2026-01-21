import { Producto } from 'src/productos/entities/producto.entity';
import { ComposicionSustrato, TexturaSustrato } from './enum-sustratos';
import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';
import { TipoProductos } from 'src/productos/entities/enum-productos';
export declare class Sustrato extends Producto {
    composicion: ComposicionSustrato[];
    textura: TexturaSustrato[];
    drenaje: string;
    plantasRecomendadas: TipoPlantasRecomendadas;
    observaciones: string;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, idCategoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string, composicion: ComposicionSustrato[], textura: TexturaSustrato[], drenaje: string, plantasRecomendadas: TipoPlantasRecomendadas, observaciones: string);
}
