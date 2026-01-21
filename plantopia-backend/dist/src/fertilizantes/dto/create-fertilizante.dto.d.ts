import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { TipoFertizante, TipoPlantasRecomendadas } from "../entities/enum-fertilizantes";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class CreateFertilizanteDto extends CreateProductoDto {
    categoria: TipoProductos;
    composición: string;
    tipo: TipoFertizante;
    frecuenciaAplicacion: string;
    presentacion: string;
    observaciones: string;
    tiposPlantasRecomendadas: TipoPlantasRecomendadas;
}
