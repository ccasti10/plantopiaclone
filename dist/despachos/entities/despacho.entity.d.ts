import { EstadosDespacho } from "./enum-despachos";
export declare class Despacho {
    id: number;
    fechaEstimada: Date;
    EstadosDespacho: EstadosDespacho;
    nroSeguimiento: number;
    proveedorDespacho: string;
}
