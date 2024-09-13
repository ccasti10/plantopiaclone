import { Producto } from "src/productos/entities/producto.entity";
import { ComposicionControlPlaga, Eficacia, MetodoAplicacion, TipoPlaga } from "./enum-control-plagas";
export declare class ControlPlagas extends Producto {
    TipoPlagaControlada: TipoPlaga[];
    composicion: ComposicionControlPlaga[];
    metodoAplicacion: MetodoAplicacion[];
    frecuenciaAplicacion: string;
    precauciones: string;
    eficacia: Eficacia;
}
