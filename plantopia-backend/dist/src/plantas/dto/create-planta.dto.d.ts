import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitat, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "../entities/enum-plantas";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class CreatePlantaDto extends CreateProductoDto {
    categoria: TipoProductos;
    habitat: Habitat;
    luz: LuzRequerida;
    frecuenciaDeRiego: FrecuenciaDeRiego;
    humedadIdeal: NivelDeHumedad;
    temperaturaIdeal: number;
    toxicidadMascotas: boolean;
    tamanoMaximo: number;
    tipoSuelo: TipoDeSuelo;
    dificultadDeCuidado: DificultadDeCuidado;
    estacion: Estacion;
    fertilizantesSugeridos: number[];
    sustratosSugeridos: number[];
}
