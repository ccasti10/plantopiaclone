import { Producto } from "src/productos/entities/producto.entity";
import { Eficacia, MetodoAplicacion, TipoPlaga } from "./enum-control-plagas";
import { TipoProductos } from "src/productos/entities/enum-productos";
export declare class ControlPlagas extends Producto {
    TipoPlagaControlada: TipoPlaga[];
    composicion: string;
    metodoAplicacion: MetodoAplicacion[];
    frecuenciaAplicacion: string;
    precauciones: string;
    eficacia: Eficacia;
    Toxicidad: boolean;
    constructor(idProducto: number, nombreProducto: string, imagenProducto: string[], descuento: number, precioNormal: number, coberturaDeDespacho: string[], stock: number, descripcionProducto: string, idCategoria: TipoProductos, valoracion: number, cantidadVentas: number, codigoProducto: string, tipoPlagaControlada: TipoPlaga[], composicion: string, metodoAplicacion: MetodoAplicacion[], frecuenciaAplicacion: string, precauciones: string, eficacia: Eficacia, Toxicidad: boolean);
}
