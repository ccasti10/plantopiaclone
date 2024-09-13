import { Producto } from "src/productos/entities/producto.entity";
import { TipoFertizante, TipoPlantasRecomendadas } from "./enum-fertilizantes";
export declare class Fertilizante extends Producto {
    marca: string;
    composición: string;
    tipo: TipoFertizante;
    frecuenciaAplicacion: string;
    presentacion: string;
    observaciones: string;
    tiposPlantasRecomendadas: TipoPlantasRecomendadas;
}
