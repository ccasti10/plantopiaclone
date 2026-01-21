import { Producto } from 'src/productos/entities/producto.entity';
import { TipoFertizante, TipoPlantasRecomendadas } from './enum-fertilizantes';
import { TipoProductos } from 'src/productos/entities/enum-productos';
export declare class Fertilizante extends Producto {
    composición: string;
    tipo: TipoFertizante;
    frecuenciaAplicacion: string;
    presentacion: string;
    observaciones: string;
    tiposPlantasRecomendadas: TipoPlantasRecomendadas;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, idCategoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string, composición: string, tipo: TipoFertizante, frecuenciaAplicacion: string, presentacion: string, observaciones: string, tiposPlantasRecomendadas: TipoPlantasRecomendadas);
}
