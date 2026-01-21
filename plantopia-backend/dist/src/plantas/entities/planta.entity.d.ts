import { Producto } from "src/productos/entities/producto.entity";
import { DificultadDeCuidado, Estacion, FrecuenciaDeRiego, Habitat, LuzRequerida, NivelDeHumedad, TipoDeSuelo } from "./enum-plantas";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class Planta extends Producto {
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
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, idCategoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string, habitat: Habitat, luz: LuzRequerida, frecuenciaDeRiego: FrecuenciaDeRiego, humedadIdeal: NivelDeHumedad, temperaturaIdeal: number, toxicidadMascotas: boolean, tamanoMaximo: number, tipoSuelo: TipoDeSuelo, dificultadDeCuidado: DificultadDeCuidado, estacion: Estacion, fertilizantesSugeridos: number[], sustratosSugeridos: number[]);
}
