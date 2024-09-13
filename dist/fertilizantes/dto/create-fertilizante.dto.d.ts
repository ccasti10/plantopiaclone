import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { TipoFertizante, TipoPlantasRecomendadas } from "../entities/enum-fertilizantes";
export declare class CreateFertilizanteDto extends CreateProductoDto {
    nombreProducto: string;
    stock: number;
    precio: number;
    imagen: string;
    marca: string;
    composición: string;
    tipo: TipoFertizante;
    frecuenciaAplicacion: string;
    presentacion: string;
    observaciones: string;
    tiposPlantasRecomendadas: TipoPlantasRecomendadas;
}
