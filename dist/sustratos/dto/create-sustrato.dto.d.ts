import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';
import { CreateProductoDto } from 'src/productos/dto/create-producto.dto';
import { ComposicionSustrato, RetencionHumedad, TexturaSustrato } from '../entities/enum-sustratos';
import { TipoProductos } from 'src/productos/entities/enum-productos';
export declare class CreateSustratoDto extends CreateProductoDto {
    categoria: TipoProductos;
    nombreProducto: string;
    urlImagen: string[];
    descripcionProducto: string;
    valorProducto: number;
    descuento?: number;
    valorNormal?: number;
    composicion: ComposicionSustrato[];
    textura: TexturaSustrato[];
    retencionDeHumedad: RetencionHumedad;
    drenaje: string;
    plantasRecomendadas: TipoPlantasRecomendadas;
    observaciones: string;
}
