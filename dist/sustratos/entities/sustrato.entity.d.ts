import { Producto } from 'src/productos/entities/producto.entity';
import { ComposicionSustrato, RetencionHumedad, TexturaSustrato } from './enum-sustratos';
import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';
import { TipoProductos } from 'src/productos/entities/enum-productos';
export declare class Sustrato extends Producto {
    idSustrato: number;
    categoria: TipoProductos;
    nombreProducto: string;
    urlImagen: string[];
    descripcionProducto: string;
    valorProducto: number;
    descuento: number;
    valorNormal?: number;
    composicion: ComposicionSustrato[];
    textura: TexturaSustrato[];
    retencionDeHumedad: RetencionHumedad;
    drenaje: string;
    plantasRecomendadas: TipoPlantasRecomendadas;
    observaciones: string;
}
