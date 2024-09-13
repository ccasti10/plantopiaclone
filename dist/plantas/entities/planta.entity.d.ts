import { Producto } from "src/productos/entities/producto.entity";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitad, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "./enum-plantas";
import { Fertilizante } from "src/fertilizantes/entities/fertilizante.entity";
import { Sustrato } from "src/sustratos/entities/sustrato.entity";
export declare class Planta extends Producto {
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
    fertilizantesSugeridos: Fertilizante[];
    sustratosSugeridos: Sustrato[];
}
