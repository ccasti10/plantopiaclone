import { EstadosOC } from "./enum-orden-compra";
import { DetalleOrdenCompra } from "src/detalle-orden-compras/entities/detalle-orden-compra.entity";
import { Despacho } from "src/despachos/entities/despacho.entity";
export declare class OrdenCompra {
    id: number;
    fechaOC: Date;
    estadoOC: EstadosOC;
    emailComprador: string;
    idCliente?: number;
    despacho?: Despacho;
    detalle: DetalleOrdenCompra[];
    constructor(id: number, fechaOC: Date, estadoOC: EstadosOC, emailComprador: string, idCliente: number, despacho: Despacho, detalle: DetalleOrdenCompra[]);
}
