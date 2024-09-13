import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitad, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "../entities/enum-plantas";
export declare class CreatePlantaDto extends CreateProductoDto {
    nombreCientifico: string;
    tamano: number;
    luzrequerida: LuzRequerida;
    frecuenciaderiego: FrecuenciaDeRiego;
    humedadideal: NivelDeHumedad;
    temperaturaIdeal: number;
    toxicidadMascotas: boolean;
    Habitad: Habitad;
    tiposuelo: TipoDeSuelo;
    dificultaddecuidado: DificultadDeCuidado;
    estacion: Estacion;
    fertilizantesSugeridos: number[];
    sustratosSugeridos: number[];
}
